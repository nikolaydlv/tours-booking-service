install:
	npm ci

build:
	rm -rf dist
	NODE_ENV=production npx webpack

develop:
	npm run start

deploy:
	git subtree push --prefix dist origin gh-pages

lint:
	npx eslint .