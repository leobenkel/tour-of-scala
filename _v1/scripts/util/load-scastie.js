define(['jquery', 'scastie', 'uuid'], function ($, scastie, uuid) {
    let loadScastie = function (selector, scastieId) {
        let id = uuid();
        let divId = `id-${id}`
        let $selector = $(selector);
        let $container = $('<div class="scastie-container"></div>');

        $container.append(`<div class="full" id='${divId}'></div>`);
        $container.append('<p class="loading scastie-loading">Loading...</p>')
        $selector.append($container);

        scastie.EmbeddedResource({
            base64UUID: scastieId,
            injectId: divId,
            serverUrl: 'https://scastie.scala-lang.org'
        });
        setTimeout(function () {
            $(".switcher-hide").click();
            $('.console-open').removeClass('console-open');

            let errorMessage = $(".runtime-error pre")
            if (errorMessage.text().includes("NotImplementedError")) {
                errorMessage.text("Replace '???' by your code.")
            }
            $container.find(".loading.scastie-loading").remove();
        }, 1000);

    };

    return loadScastie;
});