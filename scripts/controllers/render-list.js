define([
    '/scripts/util/configuration.js',
    '/scripts/util/local-storage.js',
    '/scripts/util/discord.js',
    '/scripts/util/build-data.js',
    'jquery',
    'lodash',
    'text!/scripts/template-post-list.html',
],
    function (config, storage, discord, getData, $, _, template) {
        let resetScreen = function () {
            $('body').html(template);
            $('link[rel="canonical"]').attr('href', null);
        };

        let render = function () {
            let url = config.listPostsUrl;
            let $left = $("#left");
            let $right = $("#right");
            $right.html('<p class="loading">Loading...</p>');

            getData(function (data) {
                $right.empty();
                $right.append('<div id="list-posts"></div>');
                let $listPosts = $right.find("#list-posts");
                _.orderBy(Object.values(data), function (d) { return d.index; })
                    .forEach(function (elem) {
                        let title = elem.title;
                        let index = elem.index;
                        let skbName = elem.skbName;

                        let isCurrent = skbName == storage.get("currentUrl") || (!storage.get("currentUrl") && index == 0);
                        let marker = isCurrent ? `<i class="material-icons">play_arrow</i>` : ""
                        if (isCurrent) {
                            $left.find("#skb_link").attr('href', `#skb-${skbName}`);
                            storage.set("currentUrl", skbName);
                        }

                        $listPosts.append(`
                                <a 
                                    href="#skb-${skbName}" 
                                    class="list-post-element link-to-skb" 
                                >
                                    <span class="active-skb">${marker}</span>
                                    <span class="skb-title">${title}</span>
                                </a>`);
                    });
            }
            );
        };

        let switchScreen = function () {
            window.location.hash = '#list';
            $("title").html("Tour of Scala | Home");
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
