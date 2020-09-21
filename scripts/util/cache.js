define([
    '/scripts/util/configuration.js',
    '/scripts/util/local-storage.js',
], function (config, storage) {
    let getTime = function () {
        var d = new Date();
        var n = d.getTime();
        return n;
    };

    // expiration will be the delta in ms for expiration
    // ie: if expiration is 1000, the cache will expire in 1 second.
    let cache = function (name, expiration, fetchFunction, cb) {
        let r = storage.get(name);

        // cache was found
        if (r && config.cache) {
            r = JSON.parse(r);
            let time = r.tty;
            let value = r.value;

            // not expired yet
            if (getTime() < time) {
                cb(value, true);
                return;
            }
        }

        fetchFunction(function (result) {
            storage.set(name, JSON.stringify({
                value: result,
                tty: getTime() + expiration
            }));
            cb(result, false);
        });
    };

    return cache;
});