define([
    'jquery',
    '/scripts/util/configuration.js',
    '/scripts/util/cache.js',
], function ($, config, cache) {
    let initDiscordWidget = function () {
        let url = 'https://discordapp.com/api/servers/' + config.discordServerID + '/widget.json'

        cache("discord-link", 600000 /* 10 min */,
            function (saveToCache) {
                $.ajax({
                    url: url,
                    type: "GET",
                    success: function (d, status) {
                        if (status == "success") {
                            saveToCache(d.instant_invite);
                        } else {
                            console.error(`Failed to fetch '${url}': ${status}`);
                        }
                    },
                    error: function (data, s, err) {
                        console.error((s, err));
                    }
                });
            },
            function (discordLink) {
                let $discordLink = $("#discord_link")
                $discordLink.attr('href', discordLink);
            }
        );




    };

    return initDiscordWidget;
});

