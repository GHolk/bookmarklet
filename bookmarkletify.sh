#!/bin/sh

letify() {
    local indent_js
    indent_js="$1"
    echo -n 'void function () {'
    uglifyjs $indent_js | tr -d '\n'
    echo '}()'
}

indent_js="$1"
letify $indent_js
