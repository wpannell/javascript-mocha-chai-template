REPORTER = spec

test:
	./node_modules/.bin/mocha --reporter $(REPORTER) --ui tdd

test-watch:
	./node_modules/.bin/mocha --reporter $(REPORTER) --growl --watch

.PHONY: test test-watch
