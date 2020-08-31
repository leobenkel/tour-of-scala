define(['scripts/util/find-get-param.js', 'json!config/config.json'],
    function (findGetParameter, preConfig) {
        var d = {
            debug: findGetParameter('debug', { defaultValue: false })
        };
        return Object.assign(preConfig, d);
    });
