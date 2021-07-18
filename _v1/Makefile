
kill_servers:
	cli/killServers.sh

startServer: kill_servers
	bundle exec jekyll serve --livereload

launchBrowser:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
		--new-window "http://127.0.0.1:4000" \
		--remote-debugging-port=9222 \
		--user-data-dir=/tmp/chrome2/ \
		--media-cache-size=1 \
		--disk-cache-size=1
