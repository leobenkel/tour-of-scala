define([
    'scripts/util/local-storage.js',
    'scripts/core/render-skb.js',
    'scripts/core/render-list.js'
],
    function (storage, renderSkb, renderList) {
        let currentDisplay = storage.get('currentDisplay');
        switch (currentDisplay) {
            case "skb":
                renderSkb();
                break;
            default:
                renderList();
                break;
        }
    });
