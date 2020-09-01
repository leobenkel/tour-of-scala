define([
    'scripts/util/configuration.js',
    'scripts/util/fetch-articles.js',
    'scripts/util/load-scastie.js',
    'scripts/util/local-storage.js',
    'scripts/util/cache.js',
    'scripts/util/discord.js',
    'jquery',
    'text!scripts/template-index.html'
],
    function (config, getUrl, scastie, storage, cache, discord, $, indexTemplate) {
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
                    getUrl(url, function (body) {
                        let $body = $(body);
                        let $article = $($body.find(".inside-article"));

                        // scastie
                        let $scastie = $($article.find("#skb-main-exercise-scastie"))
                        let scastieId = $scastie.attr('src').split("/").pop().split("\.").shift();

                        // navigation
                        let prevUrl = $article.find("#skb-previous-skb").attr('href');
                        let nextUrl = $article.find("#skb-next-skb").attr('href');

                        let title = $article.find("h1.entry-title").text();
                        let infoBoxes = $article.find('.skb-focus').toArray().map(function (e) { return e.innerHTML; });

                        saveToCache({
                            title: title,
                            scastieId: scastieId,
                            prevUrl: prevUrl,
                            nextUrl: nextUrl,
                            infoBoxes: infoBoxes
                        })
                    });
                },
                function (data, wasCached) {
                    $right.empty();

                    let title = data.title;
                    let scastieId = data.scastieId;
                    let nextUrl = data.nextUrl;
                    let prevUrl = data.prevUrl;
                    let infoBoxes = data.infoBoxes;

                    let renderScastie = function () { scastie("#right", scastieId); }
                    if (wasCached) {
                        renderScastie();
                    } else {
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
                    }

                    $left.find('#article-title').text(title);
                    if (prevUrl) $left.find('#prev_link').click(function () { switchScreen(prevUrl); }); else $left.find('#prev_link').remove();
                    if (nextUrl) $left.find('#next_link').click(function () { switchScreen(nextUrl); }); else $left.find('#next_link').remove();

                    $skbContent.empty();


                    let div0 = $(`<div class="skb-content-0"></div>`).html(infoBoxes[0]);
                    $skbContent.append(div0);

                    let div1 = $(`<div class="skb-content-1"></div>`);
                    $skbContent.append(div1);

                    let button = $(`<p id="skb-content-learn-more">Reveal more information and clues</p>`);
                    $skbContent.append(button);
                    $(button).click(function () {
                        $(this).remove();
                        $skbContent.find(".skb-content-1").html(infoBoxes[1]);
                        $skbContent.find(".skb-content-1").addClass("skb-visible");
                    });
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
