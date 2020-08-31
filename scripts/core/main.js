define([
    'scripts/util/configuration.js',
    'scripts/util/fetch-articles.js',
    'scripts/util/load-scastie.js',
    'jquery',
],
    function (config, getUrl, scastie, $) {
        var url = config.startUrl;
        getUrl(url, function (body) {
            var $body = $(body);
            var $article = $($body.find(".inside-article"));
            var $scastie = $($body.find("#skb-main-exercise-scastie"))
            var scastieId = $scastie.attr('src').split("/").pop().split("\.").shift();
            scastie("#content", scastieId);
        });
    });
