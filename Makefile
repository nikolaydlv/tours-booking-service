install:
	npm ci

build:
	npm run build

develop:
	npm run start

deploy:
	git subtree push --prefix dist origin gh-pages