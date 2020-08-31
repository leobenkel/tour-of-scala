define(['jquery'], function ($) {
    var fetchContent = function (url, cb) {
        $.ajax({
            url: url,
            type: "GET",
            success: function (d, status) {
                if (status == "success") {
                    cb(d);
                } else {
                    console.error(`Failed to fetch '${url}': ${status}`);
                }
            },
            error: function (data, s, err) {
                console.error((s, err));
            }
        });
    };

    return fetchContent;
});