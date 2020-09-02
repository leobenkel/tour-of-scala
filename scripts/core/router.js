define([
],
    function () {
        // https://verekia.com/requirejs/build-simple-client-side-mvc-app-require-js/

        let routes = [
            { hash: '#list', controller: 'render-list' },
            { hash: '#skb', controller: 'render-skb' },
            { hash: '#about', controller: 'render-about' }
        ];

        let defaultRoute = '#list';
        let currentHash = '';

        function loadController(controllerName) {
            require(['/scripts/controllers/' + controllerName + '.js'], function (controller) {
                controller.render();
            });
        }

        function hashCheck() {
            if (window.location.hash != currentHash) {
                let foundRoute = false
                if (window.location.hash.startsWith("#skb-")) {
                    foundRoute = true;
                    loadController('render-skb');
                } else {
                    for (var i = 0, currentRoute; currentRoute = routes[i++];) {
                        if (window.location.hash == currentRoute.hash) {
                            foundRoute = true
                            loadController(currentRoute.controller);
                        }
                    }
                }

                if (!foundRoute) {
                    console.error(`Did not found the route ${window.location.hash}`);
                    window.location.hash = defaultRoute
                } else {
                    currentHash = window.location.hash;
                }
            }
        }

        function startRouting() {
            window.location.hash = window.location.hash || defaultRoute;
            setInterval(hashCheck, 75);
        }

        return {
            startRouting: startRouting
        };
    });
