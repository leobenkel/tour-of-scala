define([
    'scripts/util/configuration.js',
    'scripts/util/fetch-articles.js',
    'scripts/util/load-scastie.js',
    'scripts/util/local-storage.js',
    'jquery',
    'text!scripts/index-template.html'
],
    function (config, getUrl, scastie, storage, $, indexTemplate) {
        let resetScreen = function () {
            $('body').html(indexTemplate);
        }

        let switchScreen = function (url = null) {
            if (url) storage.set('currentUrl', url);
            resetScreen();
            render();
        }

        let render = function () {
            let url = storage.get('currentUrl', config.startUrl);
            let $left = $("#left");
            $left.find("#source_link").attr('href', url);
            $('link[rel="canonical"').attr('href', url);

            getUrl(url, function (body) {
                let $body = $(body);
                let $article = $($body.find(".inside-article"));

                // scastie
                let $scastie = $($article.find("#skb-main-exercise-scastie"))
                let scastieId = $scastie.attr('src').split("/").pop().split("\.").shift();
                scastie("#right", scastieId);

                // navigation
                let prevUrl = $article.find("#skb-previous-skb").attr('href');
                let nextUrl = $article.find("#skb-next-skb").attr('href');

                let title = $article.find("h1.entry-title").text();
                let infoBoxes = $article.find('.skb-focus');

                let $skbContent = $left.find("#skb-content");

                $left.find('#article-title').text(title);
                if (prevUrl) $left.find('#prev_link').click(function () { switchScreen(prevUrl); }); else $left.find('#prev').remove();
                if (nextUrl) $left.find('#next_link').click(function () { switchScreen(nextUrl); }); else $left.find('#next').remove();

                $(infoBoxes).each(function (i, elem) {
                    let html = elem.innerHTML;
                    let div = $(`<div class="skb-content-${i}"></div>`).html(html);
                    $skbContent.append(div);
                });
            });
        }

        switchScreen();
    });
