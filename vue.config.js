const {
    defineConfig
} = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: './dist/docs/',
    css: {
        extract: false
    },
    pages: {
        index: {
            template: 'public/index.html',
            entry: "./examples/main.js",
            filename: 'index.html',
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            // ui
            .set('@ui', resolve('./packages/jet-plan-ui'))
            .set('@theme', resolve('./packages/jet-plan-ui-theme'))
            // examples
            .set('@common', resolve('./examples/common'))
    }
})
