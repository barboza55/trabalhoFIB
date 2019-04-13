module.exports = {
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.8.4",
        },
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "typescript": true,
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "extends": [
        "plugin:react/recommended",
        "eslint:recommended",
    ],
    "plugins": [
        "@typescript-eslint",
        "react",
    ],
    "rules": {
        "indent": [
            "error",
            4,
            { "VariableDeclarator": { "var": 2, "let": 2, "const": 3 } },
        ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 },
        ],
        "no-console": [
            "warn",
            { allow: ["warn", "error"] }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
