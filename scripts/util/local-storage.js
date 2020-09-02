define([], function () {
    let obfuscated = true;

    let encode = function (str) {
        return obfuscated ? btoa(unescape(encodeURIComponent(str))) : str;
    };

    let decode = function (str) {
        return obfuscated ? decodeURIComponent(escape(window.atob(str))) : str;
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