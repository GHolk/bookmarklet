
all: *.bookmarklet.js

bbsjs.bookmarklet.js: bbsjs.user.js
	sh bookmarkletify.sh $< > $@

%.bookmarklet.js: %.js
	sh bookmarkletify.sh $< > $@

.PHONY: all
