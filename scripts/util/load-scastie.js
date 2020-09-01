define(['jquery', 'scastie', 'uuid'], function ($, scastie, uuid) {
    let loadScastie = function (selector, scastieId) {
        let id = uuid();
        let divId = `id-${id}`
        $(selector).append(`<div id='${divId}'><p>Loading...</p></div>`);

        setTimeout(function () {
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
            }, 1500);
        }, 2000)

    };

    return loadScastie;
});