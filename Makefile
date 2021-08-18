
all: *.bookmarklet.js

bbsjs.bookmarklet.js: bbsjs.user.js
	sh bookmarkletify.sh $< > $@

%.bookmarklet.js: %.js
	sh bookmarkletify.sh $< > $@

paste-to-form-file.bookmarklet.js: paste-to-form-file.user.js
	sh bookmarkletify.sh $< > $@

.PHONY: all
