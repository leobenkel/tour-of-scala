define([
    '/scripts/util/configuration.js',
    '/scripts/util/local-storage.js',
    '/scripts/util/discord.js',
    '/scripts/util/build-data.js',
    'jquery',
    'lodash',
    'text!/scripts/template-about.html',
],
    function (config, storage, discord, getData, $, _, template) {
        let resetScreen = function () {
            $('body').html(template);
            $('link[rel="canonical"]').attr('href', null);
        };

        let render = function () {
            let url = config.listPostsUrl;

            getData(function (data) {
                Object.values(data)
                    .forEach(function (elem) {
                        let title = elem.title;
                        let index = elem.index;
                        let skbName = elem.skbName;

                        let isCurrent = skbName == storage.get("currentUrl") || (!storage.get("currentUrl") && index == 0);

                        if (isCurrent) {
                            $("#skb_link").attr('href', `#skb-${skbName}`);
                            storage.set("currentUrl", skbName);
                            return false;
                        }
                    });
            }
            );
        };

        let switchScreen = function () {
            window.location.hash = '#about';
            $("title").html("Tour of Scala | About");
            resetScreen();
            discord();
            render();
        };

        return {
            render: function () {
                switchScreen();
            }
        }
    });
