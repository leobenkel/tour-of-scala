define([
    '/scripts/util/load-scastie.js',
    '/scripts/util/local-storage.js',
    '/scripts/util/discord.js',
    '/scripts/util/build-data.js',
    '/scripts/util/process-names.js',
    '/scripts/util/panel-rendering.js',
    '/scripts/core/navigator.js',
    'jquery',
    'text!/scripts/template-skb.html'
],
    function (scastie, storage, discord, getData, p, panel, navigator, $, template) {
        let resetScreen = function () {
            panel(template);
            $('link[rel="canonical"]').attr('href', null);
        };

        let renderBlock = function (data) {
            let $left = $("#left");
            let $skbContent = $left.find("#skb-content");
            let $right = $("#right");
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
                $('title').html(`${title} | Tour of Scala`);

                if (prevUrl) $left.find('#prev_link').attr('href', `#!skb-${prevUrl}`); else $left.find('#prev_link').remove();
                if (nextUrl) $left.find('#next_link').attr('href', `#!skb-${nextUrl}`); else $left.find('#next_link').remove();

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
        };

        let render = function () {
            let $left = $("#left");

            getData(function (data) {
                let url = navigator.hash().replace("skb-", "");
                if (!url || url == "") {
                    url = _.find(Object.values(data), function (d) { return d.index == 0; }).skbName;
                    storage.set('currentUrl', url);
                }
                let rightPost = data[url];

                if (rightPost) {
                    let skbName = rightPost.skbName;
                    navigator.set(`skb-${skbName}`)
                    storage.set('currentUrl', url);

                    let link = rightPost.link;
                    $left.find("#source_link").attr('href', link);
                    $('link[rel="canonical"]').attr('href', link);

                    let body = rightPost.content;
                    let $article = $(body);

                    // scastie
                    let $scastie = $($article.find("#skb-main-exercise-scastie"))
                    let scastieId = $scastie.attr('src').split("/").pop().split("\.").shift();

                    // navigation
                    let prevUrl = p.url($article.find("#skb-previous-skb").attr('href'));
                    let nextUrl = p.url($article.find("#skb-next-skb").attr('href'));

                    let title = rightPost.title;
                    let infoBoxes = $article.find('.skb-focus').toArray().map(function (e) { return e.innerHTML; });

                    renderBlock({
                        title: title,
                        scastieId: scastieId,
                        prevUrl: prevUrl,
                        nextUrl: nextUrl,
                        infoBoxes: infoBoxes
                    });
                } else {
                    console.error(`Could not find a page for key: ${url}`)
                }
            });
        };

        let setRightPath = function () {
            getData(function (data) {
                let url = storage.get('currentUrl');
                if (!url) {
                    url = _.find(Object.values(data), function (d) { return d.index == 0; }).skbName;
                    storage.set('currentUrl', url);
                }
                let rightPost = data[url];

                if (rightPost) {
                    let skbName = rightPost.skbName;
                    navigator.set(`skb-${skbName}`);
                }
            });
        };

        let switchScreen = function (url = null) {
            if (navigator.hash() == "skb") {
                setRightPath();
            } else {
                resetScreen();
                discord();
                render();
            }
        };

        return {
            render: function () {
                switchScreen();
            }
        }
    }
);
