module.exports = {
    "plugins": [
        "angular",
        "jasmine",
        "react",
    ],

    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "amd": true,
        "es6": true
    },

    "globals": {
        "$": false,
        "$$": false,
        "_": false,
        "angular": false,
        "browser": false,
        "by": false,
        "element": false,
        "gettext": false,
        "inject": false,
        "moment": false,
        "protractor": false,
        "requirejs": false
    },

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "globalReturn": false,
            "impliedStrict": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },

    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jasmine/recommended",
    ],

    "rules": {
        "angular/empty-controller": 2,
        "angular/no-cookiestore": 2,
        "angular/no-http-callback": 2,

        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-multi-comp": 2,
        "react/self-closing-comp": 2,
        "react/prefer-es6-class": 2,

        // Temporary measure because of deprecation of componentWillMount/componentWillReceiveProps lifecycle methods
        "react/no-deprecated": 1,

        // deprecated apis
        "react/no-find-dom-node": 1,
        "react/no-string-refs": 1,

        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": [1, 10],
        "no-alert": 2,
        "no-caller": 2,
        "no-console": ["error", {allow: ["info", "warn", "error"]}],
        "no-empty-function": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-param-reassign": 2,
        "no-proto": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-unmodified-loop-condition": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 1,
        "no-useless-return": 2,
        "no-void": 2,
        "no-with": 2,
        "radix": 2,
        "yoda": 2,

        "strict": [2, "never"],

        "no-shadow-restricted-names": 2,
        "no-unused-vars": [2, {"vars": "all", "args": "none"}],
        "no-undef-init": 2,

        // jasmine
        "jasmine/new-line-before-expect": 0,
        "jasmine/new-line-between-declarations": 0,

        // style
        "array-bracket-spacing": [2, "never"],
        "block-spacing": 2,
        "brace-style": [2, "1tbs"],
        "camelcase": [2, {"properties": "never"}],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }],
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": [2, "self"],
        "func-call-spacing": 2,
        "indent": [2, 4],
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": [2, "unix"],
        "max-depth": [2, 3],
        "max-len": [2, 120, 4],
        "new-parens": 2,
        "newline-after-var": 2,
        "newline-per-chained-call": [2, {"ignoreChainWithDepth": 2}],
        "no-lonely-if": 2,
        "no-multiple-empty-lines": 2,
        "no-nested-ternary": 2,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-spacing": [2, "never"],
        "padded-blocks": [2, "never"],
        "quote-props": [2, "as-needed"],
        "quotes": [2, "single"],
        "require-jsdoc": 0,
        "semi-spacing": 2,
        "semi": [2, "always"],
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,

        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "always"],
        "arrow-spacing": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-rename": 2,
        "no-var": 0,
        "object-shorthand": [2, "consistent"],
        "prefer-arrow-callback": [2, {"allowNamedFunctions": true}],
        "prefer-spread": 2,
        "rest-spread-spacing": 2,
        "template-curly-spacing": 2,
        "yield-star-spacing": 2
    }
};
