
all: *.bookmarklet.js
%.bookmarklet.js: %.js
	sh bookmarkletify.sh $< > $@

.PHONY: all
