define([
    'scripts/util/configuration.js',
    'scripts/util/load-scastie.js',
    'scripts/util/local-storage.js',
    'scripts/util/discord.js',
    'scripts/util/build-data.js',
    'scripts/util/cache.js',
    'jquery',
    'text!scripts/template-index.html'
],
    function (config, scastie, storage, discord, getData, cache, $, indexTemplate) {
        let resetScreen = function () {
            $('body').html(indexTemplate);
        };

        let render = function () {
            let url = storage.get('currentUrl', config.startUrl);
            let $left = $("#left");
            let $right = $("#right");
            $left.find("#source_link").attr('href', url);
            $('link[rel="canonical"').attr('href', url);

            let renderList = require('scripts/core/render-list.js');
            $left.find('#home_link').click(function () { renderList(); });

            let $skbContent = $left.find("#skb-content");

            cache(`skb-${url}`, 7 * 24 * 600000 /* one week */,
                function (saveToCache) {
                    getData(function (data) {
                        let rightPost = _.find(data, function (d) {
                            return d.link == url;
                        });

                        if (rightPost) {
                            let body = rightPost.content;
                            let $article = $(body);

                            // scastie
                            let $scastie = $($article.find("#skb-main-exercise-scastie"))
                            let scastieId = $scastie.attr('src').split("/").pop().split("\.").shift();

                            // navigation
                            let prevUrl = $article.find("#skb-previous-skb").attr('href');
                            let nextUrl = $article.find("#skb-next-skb").attr('href');

                            let title = rightPost.title;
                            let infoBoxes = $article.find('.skb-focus').toArray().map(function (e) { return e.innerHTML; });

                            saveToCache({
                                title: title,
                                scastieId: scastieId,
                                prevUrl: prevUrl,
                                nextUrl: nextUrl,
                                infoBoxes: infoBoxes
                            });
                        }
                    });
                },
                function (data) {
                    $right.empty();
                    if (data) {
                        let title = data.title;
                        let scastieId = data.scastieId;
                        let nextUrl = data.nextUrl;
                        let prevUrl = data.prevUrl;
                        let infoBoxes = data.infoBoxes;

                        let renderScastie = function () { scastie("#right", scastieId); }

                        let $triggerScastieDiv = $(`
                            <div id="load-scastie">
                                <div id="load-scastie-text">
                                    Load Exercise
                                </div>
                            </div>
                        `);
                        $($triggerScastieDiv).click(function () {
                            $(this).remove();
                            renderScastie();
                        });
                        $right.append($triggerScastieDiv);

                        $left.find('#article-title').html(title);
                        if (prevUrl) $left.find('#prev_link').click(function () { switchScreen(prevUrl); }); else $left.find('#prev_link').remove();
                        if (nextUrl) $left.find('#next_link').click(function () { switchScreen(nextUrl); }); else $left.find('#next_link').remove();

                        $skbContent.empty();


                        let div0 = $(`<div class="skb-content"></div>`).html(infoBoxes[0]);
                        $skbContent.append(div0);

                        let divClue = $(`<div id="skb-clue"></div>`);
                        let div1 = $(`<div class="skb-content"></div>`).html(infoBoxes[1]);
                        divClue.append(div1);
                        let button = $(`<p id="skb-content-learn-more">Reveal more information and clues</p>`);
                        $(button).click(function () {
                            $(this).remove();
                            $skbContent.find("#skb-clue .skb-content").html(infoBoxes[1]);
                            $skbContent.find("#skb-clue .skb-content").addClass("skb-visible");
                        });
                        divClue.append(button);

                        $skbContent.append(divClue);
                    } else {
                        $skbContent.append(`<div>Uknown SKB at url: ${url}</div>`)
                    }
                }
            );
        };

        let switchScreen = function (url = null) {
            storage.set('currentDisplay', 'skb');
            if (url) storage.set('currentUrl', url);
            resetScreen();
            discord();
            render();
        };

        return switchScreen;
    }
);
