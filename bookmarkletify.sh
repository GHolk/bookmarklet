#!/bin/sh

letify() {
    local indent_js
    indent_js="$1"
    echo -n 'void function () {'
    uglifyjs -c <$indent_js | tr -d '\n'
    echo '}()'
}

encode_js_url() {
    echo -n javascript:
    node -p 'encodeURIComponent(process.argv[1])' -- "$(cat)"
}

print_help() {
    cat <<HELP
usage
        # generate minified javascript wraped in void function(){ ... }()
        $0 script.js

        # generate percentage encoded javascript url
        $0 to-url script.js
HELP
}

encode_data_url() {
    echo -n 'data:text/html;base64,'
    base64
}


if [ $# -eq 1 ]
then
    letify "$1"
elif [ "$1" = to-url ]
then
    shift

    file="$1"
    shift
    case "$file" in
        *.js) letify "$file" | encode_js_url ;;
        *.html|*.htm) encode_data_url < "$file" | tr -d '\n' ;;
    esac
else
    echo -n unknown option:
    printf ' "%s"' "$@"
    printf "\n"
    print_help
    exit 1
fi

