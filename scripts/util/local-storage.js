define([], function () {
    let encode = function (str) {
        return btoa(unescape(encodeURIComponent(str)));
    };

    let decode = function (str) {
        return decodeURIComponent(escape(window.atob(str)));
    };

    let setStorage = function (key, value) {
        window.localStorage.setItem(encode(key), encode(value));
        let obj = {}
        obj[key] = value;
        return obj;
    };

    let getStorage = function (key, defaultValue = null) {
        let value = window.localStorage.getItem(encode(key));
        if (value && value != "null") {
            return decode(value);
        } else {
            if (defaultValue) setStorage(key, defaultValue);
            return defaultValue;
        }
    };


    let localStorage = {
        get: getStorage,
        set: setStorage,
        clear: function () {
            window.localStorage.clear();
        }
    };

    return localStorage;
});