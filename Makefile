start:
	netlify dev

clean:
	rm -rf node_modules package-lock.json .netlify .next out next-env.d.ts

install:
	npm install
	npm audit fix --force || echo ''

start_dev:
	npx next dev --webpack -p 4000

start_prod:
	npx next build --webpack --debug
	NODE_OPTIONS='--inspect' npx next start -p 4000

start_prod_netlify:
	netlify build
	cd ./.next
	http-server -p 4000

update_netlify:
	npm uninstall -g netlify-cli
	npm i -g netlify-cli
	npm audit fix

check_versions:
	npm outdated

refresh_snippets:
	node scripts/save-snippets.mjs

refresh_snippets_dry:
	node scripts/save-snippets.mjs --dry-run