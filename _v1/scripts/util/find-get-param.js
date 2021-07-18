define(function () {
    let findGetParameter = function (parameterName, config = { url: null, defaultValue: null }) {
        let result = null;
        let tmp = [];

        let url = config.url ? config.url : location.search;

        url
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) {
                    result = tmp[1] ? decodeURIComponent(tmp[1]) : true;
                }
            });
        return result ? result : config.defaultValue;
    };

    return findGetParameter;
});