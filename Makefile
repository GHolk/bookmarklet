
all: README.md index.html

html_bookmarklet = screen-message.html

bbsjs.bookmarklet.js: bbsjs.user.js
	sh bookmarkletify.sh $< > $@

%.bookmarklet.js: %.js
	sh bookmarkletify.sh $< > $@

paste-to-form-file.bookmarklet.js: paste-to-form-file.user.js
	sh bookmarkletify.sh $< > $@

README.md: README.md.body README.md.ref
	cat $^ > $@

README.md.ref: README.md.body *.bookmarklet.js *.user.js $(html_bookmarklet)
	sh bookmarkletify.sh reference $< > $@

index.html: README.md
	marked $<

.PHONY: all
