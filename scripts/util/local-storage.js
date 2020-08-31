define([], function () {
    let localStorage = {
        get: function (key, defaultValue = null) {
            let value = window.localStorage.getItem(key);
            return value && value != "null" ? value : defaultValue;
        },
        set: function (key, value) {
            window.localStorage.setItem(key, value);
            let obj = {}
            obj[key] = value;
            return obj;
        },
        clear: function () {
            window.localStorage.clear();
        }
    };

    return localStorage;
});