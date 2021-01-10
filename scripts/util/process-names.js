define(function () {
    return {
        url: function (input) {
            if (!input.endsWith('/')) {
                input = input + '/';
            }
            // console.log('process URL: ', input);
            return input ? input.split("/").slice(-2, -1)[0].replace(/skb-/i, "").replace(/scala-/i, "").trim() : null;
        },
        title: function (input) {
            return input ? input.replace(/skb/i, "").replace(/&#8211;/i, "").trim() : null;
        }
    };
});
