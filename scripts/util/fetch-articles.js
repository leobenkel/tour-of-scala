define(['jquery'], function ($) {
    let extractNextLink = function (xhr) {
        function parse(input) {
            // input:
            // "<https://leobenkel.com/wp-json/wp/v2/posts?categories%5B0%5D=171&page=2>; rel="next""
            var rx = /<([^,]*)>; rel="next"/g;
            var arr = rx.exec(input) || [null, null];
            return arr[1];
        }
        let match = parse(xhr.getAllResponseHeaders());
        return match;
    }


    let fetchContent = function (url, cb) {
        $.ajax({
            url: url,
            type: "GET",
            success: function (d, status, xhr) {
                if (status == "success") {
                    let nextUrl = extractNextLink(xhr);
                    if (nextUrl) {
                        fetchContent(nextUrl, function (data) {
                            cb(d.concat(data));
                        });
                    } else {
                        cb(d)
                    }
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