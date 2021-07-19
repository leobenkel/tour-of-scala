import { isDev } from 'lib/environment';


const obfuscated = !isDev

function encode(str) {
    return obfuscated ? btoa(unescape(encodeURIComponent(str))) : str;
};

function decode(str) {
    return obfuscated ? decodeURIComponent(escape(window.atob(str))) : str;
};

export function writeStorage(key, value, expirationHour = 24) {
    // https://stackoverflow.com/questions/1050720/adding-hours-to-javascript-date-object
    const makeTime = (h) => {
        const date = new Date()
        date.setHours(date.getHours() + h)
        return date
    }

    const expirationDate = makeTime(expirationHour).getTime()
    // console.log(expirationHour, expirationDate)

    const content = {
        value,
        expirationDate
    }

    window.localStorage.setItem(
        encode(key),
        encode(JSON.stringify(content))
    );

    return { [key]: content }
};

export function readStorage(key, defaultValue = null) {
    const keyEnc = encode(key)
    const value = window.localStorage.getItem(keyEnc);
    if (value && value != "null") {
        const content = JSON.parse(decode(value));
        const expirationDate = content.expirationDate
        if (expirationDate <= Date.now()) {
            removeStorage(keyEnc)
            return defaultValue
        } else {
            return content.value
        }
    } else {
        return defaultValue
    }
};

export function removeStorage(key) {
    window.localStorage.removeItem(encode(key));
}

export function clearStorage() {
    window.localStorage.clear();
}
