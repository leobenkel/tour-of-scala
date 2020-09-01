define([
    'scripts/util/configuration.js',
    'scripts/util/fetch-articles.js',
    'scripts/util/cache.js',
    'lodash',
],
    function (config, getUrl, cache, _) {
        let fetchData = function (cb) {
            let url = config.listPostsUrl;

            cache("post-list-content", 24 * 600000 /* one day */,
                function (cb) {
                    getUrl(url, function (body) {
                        let data = body.map(function (elem) {
                            return {
                                link: elem.link,
                                title: elem.title.rendered,
                                content: elem.content.rendered
                            };
                        });
                        let sortedData = _.reverse(data);
                        cb(sortedData);
                    });
                },
                cb
            )
        };

        return fetchData;
    });
