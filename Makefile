
all: README.md index.html vendor/bookmarklet-editor-gholk-embed.html

html_bookmarklet = screen-message.html tg-note.html
tridactyl_clean_list =

bbsjs.bookmarklet.js: bbsjs.user.js
	sh bookmarkletify.sh $< > $@

%.bookmarklet.js: %.user.js
	sh bookmarkletify.sh $< > $@

%.bookmarklet.js: %.js
	if expr "$(tridactyl_clean_list)" : ".*$<" >/dev/null && \
	[ -z "$$TRIDACTYL_CLEAN" ] ; \
	then export TRIDACTYL_CLEAN=1; fi; \
	sh bookmarkletify.sh $< > $@

paste-to-form-file.bookmarklet.js: paste-to-form-file.user.js
	sh bookmarkletify.sh $< > $@

README.md: README.md.body README.md.ref
	cat $^ > $@

README.md.ref: README.md.body *.bookmarklet.js $(html_bookmarklet)
	sh bookmarkletify.sh reference $< > $@

index.html: README.md
	mark-dd $< > $@

vendor/bookmarklet-editor-gholk-embed.html: bookmarklet-editor-gholk.html
	mark-dd --html -r embed $< > $@

clean:
	rm -rf README.md README.md.ref index.html *.bookmarklet.js

.PHONY: all clean
