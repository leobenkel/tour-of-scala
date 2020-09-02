define([
    '/scripts/util/configuration.js',
    '/scripts/util/fetch-articles.js',
    '/scripts/util/cache.js',
    '/scripts/util/process-names.js',
    'lodash',
],
    function (config, getUrl, cache, p, _) {
        let fetchData = function (cb) {
            let url = config.listPostsUrl;

            cache("post-list-content", 24 * 600000 /* one day */,
                function (cb) {
                    getUrl(url, function (body) {
                        let data = {};
                        _.reverse(body).map(function (elem, i) {
                            let link = elem.link
                            let skbName = p.url(link);
                            data[skbName] = {
                                link: link,
                                title: p.title(elem.title.rendered),
                                content: elem.content.rendered,
                                skbName: skbName,
                                index: i
                            };
                        });
                        cb(data);
                    });
                },
                cb
            )
        };

        return fetchData;
    });
