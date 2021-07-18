start:
	netlify dev -e -p 4001

clean:
	rm -rf node_modules package-lock.json .netlify .next out next-env.d.ts

install:
	npm install
	npm audit fix || echo ''

start_dev:
	npx next dev -p 4001

start_prod:
	npx next build --debug
	NODE_OPTIONS='--inspect' npx next start -p 4001

start_prod_netlify:
	netlify build
	cd ./out
	http-server -p 4001

update_netlify:
	npm uninstall -g netlify-cli
	npm i -g netlify-cli
	npm audit fix
