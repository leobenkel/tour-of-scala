define([
    'scripts/util/configuration.js',
    'scripts/util/fetch-articles.js',
    'scripts/util/local-storage.js',
    'scripts/util/cache.js',
    'scripts/util/discord.js',
    'jquery',
    'lodash',
    'text!scripts/template-post-list.html',
],
    function (config, getUrl, storage, cache, discord, $, _, template) {
        let resetScreen = function () {
            $('body').html(template);
        };

        let render = function () {
            let url = config.listPostsUrl;
            let $left = $("#left");
            let $right = $("#right");
            $right.html("<p>Loading...</p>");

            let renderSkb = require('scripts/core/render-skb.js');
            $left.find("#skb_link").click(function () { renderSkb(); });

            cache("post-list-content", 24 * 600000 /* one day */,
                function (cb) {
                    getUrl(url, function (body) {
                        let data = body.map(function (elem) {
                            let link = elem.link;
                            let title = elem.title.rendered;

                            return {
                                link: link,
                                title: title
                            };
                        });
                        let sortedData = _.reverse(data);
                        cb(sortedData);
                    });
                },
                function (data) {
                    $right.empty();
                    $right.append('<div id="list-posts"></div>');
                    let $listPosts = $right.find("#list-posts");
                    data
                        .forEach(function (elem, i) {
                            let link = elem.link;
                            let title = elem.title;

                            let isCurrent = link == storage.get("currentUrl", config.startUrl);
                            let marker = isCurrent ? `<i class="material-icons">play_arrow</i>` : ""

                            $listPosts.append(`
                                <a 
                                    href="#" 
                                    class="list-post-element link-to-skb" 
                                    data-skb-link="${link}"
                                >
                                    <span class="active-skb">${marker}</span>
                                    <span class="skb-title">${title}</span>
                                </a>`);
                        });
                    $listPosts.find(".link-to-skb").click(function () {
                        let linkSkb = $(this).data("skb-link");
                        renderSkb(linkSkb);
                    });
                }
            )
        };

        let switchScreen = function () {
            storage.set('currentDisplay', 'list');
            resetScreen();
            discord();
            render();
        };

        return switchScreen;
    });
