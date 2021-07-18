define(['jquery'], function ($) {
    let Refresher = function () {
        let totalTime = 0
        let intervalStop = false;
        let currentArticleCount = 0;
        let displayArticleCount = 0;
        let totalArticles = 0;
        let currentTimePerUnit = 1000;

        let refreshLoading = function () {
            // console.log(`d: ${displayArticleCount}, cac: ${currentArticleCount}, ta: ${totalArticles}, ctpu: ${currentTimePerUnit}`);
            if (!intervalStop) {
                displayArticleCount = displayArticleCount + 1;
                let percentage = percentageDisplay();
                if (percentage > 99) percentage = 99;
                $('.loading').text(`Loading (${percentage}%)...`)
                setTimeout(function () { refreshLoading(); }, Math.floor(currentTimePerUnit));
            }
        }

        let percentageDisplay = function () {
            return Math.round(displayArticleCount / totalArticles * 100.0 || 1);
        }

        let update = function (total_articles, requestTime, countAddition) {
            totalArticles = total_articles;
            currentArticleCount = currentArticleCount + countAddition;
            displayArticleCount = currentArticleCount;
            totalTime = totalTime + requestTime;
            currentTimePerUnit = 1.0 * totalTime / currentArticleCount;
            currentTimePerUnit = currentTimePerUnit + (currentTimePerUnit * (1 - currentArticleCount / totalArticles));
        }

        let stop = function () {
            intervalStop = true;
        }

        let init = function () {
            totalTime = 0;
            intervalStop = false;
            currentArticleCount = 0;
            displayArticleCount = 0;
            totalArticles = 100;
            currentTimePerUnit = 1200;
            setTimeout(function () { refreshLoading(); }, 1);
        }

        init();

        return {
            update: update,
            stop: stop
        }
    }

    let extractNextLink = function (xhr) {
        function parse(input) {
            // input:
            // x-wp-total: 30
            let rx_total = /x-wp-total: ?([0-9]+)/g;
            let arr = rx_total.exec(input) || [null, null];
            let total_articles = parseInt(arr[1]);

            // input:
            // "<https://leobenkel.com/wp-json/wp/v2/posts?categories%5B0%5D=171&page=2>; rel="next""
            let rx = /<([^,]*)>; rel="next"/g;
            arr = rx.exec(input) || [null, null];
            let link_to_next_page = arr[1]
            return { link_to_next_page: link_to_next_page, total_articles: total_articles };
        }
        let match = parse(xhr.getAllResponseHeaders());
        return match;
    }

    let fetchContent = function (url, cb) {
        let refresher = Refresher();

        let fetchRecursive = function (url, cb) {
            let start_time = new Date().getTime();
            $.ajax({
                url: url,
                type: "GET",
                success: function (d, status, xhr) {
                    if (status == "success") {
                        let results = extractNextLink(xhr);
                        let nextUrl = results.link_to_next_page;
                        let request_time_ms = new Date().getTime() - start_time;
                        refresher.update(results.total_articles, request_time_ms, d.length)
                        if (nextUrl) {
                            fetchRecursive(nextUrl, function (data) {
                                cb(d.concat(data));
                            });
                        } else {
                            refresher.stop();
                            cb(d);
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
        fetchRecursive(url, cb);
    };

    return fetchContent;
});