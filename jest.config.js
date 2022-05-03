module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    "moduleNameMapper": {
        "^@test/(.*)$": '<rootDir>/test/$1',
        "^@/(.*)$": "<rootDir>/examples/$1",
        "^@ui/(.*)$": "<rootDir>/packages/jet-plan-ui/$1"
    },
    "resolver": undefined,
    verbose: false,
}
