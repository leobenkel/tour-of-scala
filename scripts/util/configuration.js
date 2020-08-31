define(['scripts/util/find-get-param.js', 'json!config/config.json'],
    function (findGetParameter, preConfig) {
        let d = {
            debug: findGetParameter('debug', { defaultValue: false })
        };
        return Object.assign(preConfig, d);
    });
