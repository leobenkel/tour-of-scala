define(['jquery', 'scastie', 'uuid'], function ($, scastie, uuid) {
    var loadScastie = function (selector, scastieId) {
        var id = uuid();
        var divId = `id-${id}`
        $(selector).append(`<div id='${divId}'></div>`);
        scastie.EmbeddedResource({
            base64UUID: scastieId,
            injectId: divId,
            serverUrl: 'https://scastie.scala-lang.org'
        });
    };

    return loadScastie;
});