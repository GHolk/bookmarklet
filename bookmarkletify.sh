#!/bin/sh

letify() {
    local indent_js
    indent_js="$1"
    if [ -n "$TRIDACTYL_CLEAN" ] && [ "$TRIDACTYL_CLEAN" != 0 ]
    then
        {
            echo 'void function () {'
            echo 'function main() {'
            cat $indent_js
            echo '}'
            cat tridactyl-clean-run.js
            echo '}()'
        } | uglifyjs
        # compress will translate void into `!`
        # which break bookmarklet
    else
        echo -n 'void function () {'
        uglifyjs -c <$indent_js | tr -d '\n'
        echo '}()'
    fi
}

encode_js_url() {
    echo -n javascript:
    node -p 'encodeURIComponent(process.argv[1])' -- "$(cat)"
}

reference_generate() {
    sed -n -r '/^#.*\[/ {
s/^#+.*\[(.*?)\]$/\1/
s/^ *//; s/ *$//
p }' "$@" | while read name
    do
        kebab=$(echo $name | sed 's/ /-/g')
        if [ -f "$name" ]
        then reference_encode "$name" "$name"
        else
            find=''
            for suffix in bookmarklet.js user.js html
            do
                if [ -f $kebab.$suffix ]
                then
                    find=t
                    reference_encode $kebab.$suffix "$name"
                fi
            done
            if [ -z "$find" ]
            then
                echo "can not find $kebab for $name" >&2
            fi
        fi
    done
}

reference_encode() {
    local file="$1"
    local name="$2"
    case "$file" in
        *.user.js) echo "[$name]: $file" ;;
        *.bookmarklet.js)
            echo -n "[$name]: "
            cat "$file" | encode_js_url
            echo
            ;;
        *.html|*.htm)
            echo -n "[$name]: "
            encode_data_url < "$file" | tr -d '\n'
            echo
            ;;
    esac
}

print_help() {
    cat <<HELP
usage
        # generate minified javascript wraped in void function(){ ... }()
        $0 script.js

        # generate percentage encoded javascript url
        $0 to-url script.js

        # generate reference for markdown
        $0 reference README.md.body
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
elif [ "$1" = reference ]
then
    shift
    reference_generate "$@"
else
    echo -n unknown option:
    printf ' "%s"' "$@"
    printf "\n"
    print_help
    exit 1
fi

