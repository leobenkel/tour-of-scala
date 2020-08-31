define(['jquery', 'scastie', 'uuid'], function ($, scastie, uuid) {
    let loadScastie = function (selector, scastieId) {
        let id = uuid();
        let divId = `id-${id}`
        $(selector).append(`<div id='${divId}'></div>`);
        scastie.EmbeddedResource({
            base64UUID: scastieId,
            injectId: divId,
            serverUrl: 'https://scastie.scala-lang.org'
        });
    };

    return loadScastie;
});