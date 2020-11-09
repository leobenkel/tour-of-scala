define([
    '/scripts/util/find-get-param.js'
],
    function (findGetParam) {
        // The article about '_escaped_fragment_' :
        // https://www.searchenginepeople.com/blog/anchor-links.html

        const regex = /#!?([^#?!]+|)/;
        let defaultRoute = 'root';
        let usingEscapedFragment = false;

        // TODO: Needs to be false
        let debug = true;

        let latestReadDisplay
        let displayRead = function (hash) {
            if (debug && latestReadDisplay != hash) {
                console.log("read", hash);
                latestReadDisplay = hash;
            }
        }

        let getHash = function () {
            let windowHash = window.location.hash;
            let regexArray = regex.exec(windowHash) || { 1: null };
            let trueHashFromHash = regexArray[1];

            let mightBeTrueHash = findGetParam("_escaped_fragment_");

            usingEscapedFragment = !!mightBeTrueHash;

            let trueHash = trueHashFromHash || mightBeTrueHash || defaultRoute;

            displayRead(trueHash);

            return {
                hash: trueHash,
                escaped_fragment: usingEscapedFragment
            };
        }

        let setHash = function (newHash) {
            if (debug) console.log("set", newHash, usingEscapedFragment)
            if (usingEscapedFragment) {
                document.location.href = `?_escaped_fragment_=${newHash}`;
            } else {
                window.location.hash = `#!${newHash}`;
            }
        }

        return {
            get: getHash,
            hash: function () {
                return getHash().hash;
            },
            set: setHash,
            isDebug: debug
        };
    });
