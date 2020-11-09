define([
    '/scripts/core/navigator.js',
],
    function (navigator) {
        // https://verekia.com/requirejs/build-simple-client-side-mvc-app-require-js/

        let skbRoute = { hash: ['skb'], controller: 'render-skb' }
        let routes = [
            { hash: ['list'], controller: 'render-list' },
            skbRoute,
            { hash: ['about'], controller: 'render-about' }
        ];

        let defaultRoute = 'list';
        let currentHash = {};

        let usingEscapedFragment = false;

        let getHash = function () {
            let r = navigator.get();
            usingEscapedFragment = r.escaped_fragment;
            return r.hash;
        }

        let setCurrentHash = function (controller) {
            currentHash = {
                realHash: getHash(),
                hashObj: controller
            };
        }

        let loadController = function (controller, cb) {
            setCurrentHash(controller);
            require([`/scripts/controllers/${controller.controller}.js`], function (controllerEngine) {
                setCurrentHash(controller);
                if (navigator.isDebug) console.log(`calling controller '${controller.hash}'...`);
                controllerEngine.render();
                cb();
            });
        }

        let hashCheck = function (cb) {
            let currentHashNotSet = !currentHash.realHash || !currentHash.hashObj;
            let currentHashIsPageHash = !currentHashNotSet && currentHash.hashObj.hash.includes(getHash());
            let currentHashIsSKB = !currentHashNotSet && currentHash.realHash.startsWith("skb-");
            let pageHashIsSKB = getHash().startsWith("skb-");
            let currentHashIsSameSKB = pageHashIsSKB && currentHashIsSKB && currentHash.realHash == getHash()

            if (currentHashNotSet || !(currentHashIsSameSKB || currentHashIsPageHash)) {
                let foundRoute = false;

                if (pageHashIsSKB) {
                    foundRoute = true;
                    loadController(skbRoute, cb);
                    return;
                } else {
                    for (var i = 0, currentRoute; currentRoute = routes[i++];) {
                        if (currentRoute.hash.includes(getHash())) {
                            foundRoute = true
                            loadController(currentRoute, cb);
                            return;
                        }
                    }
                }

                if (!foundRoute || !currentHash.realHash) {
                    navigator.set(defaultRoute);
                }

                cb();
                return;
            }

            cb();
            return;
        }

        let sleepTime = 75

        let loopRenderer = function () {
            hashCheck(function () {
                if (usingEscapedFragment) {
                    usingEscapedFragment = false;
                    window.history.replaceState({}, document.title, `/#!${getHash()}`);
                }
                runRenderer();
            })
        }

        let runRenderer = function () {
            setTimeout(loopRenderer, sleepTime);
        }

        let startRouting = function () {
            runRenderer();
        }

        return {
            startRouting: startRouting
        };
    });
