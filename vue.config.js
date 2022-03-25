const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            template: 'public/index.html',
            entry: "./examples/main.js",
            filename: 'index.html',
        }
    },
    css: { extract: false },
    // jetplanui.github.io 主页输出目录
    outputDir: './dist/docs/',
    // 为packages目录添加babel-loader处理
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add(resolve('packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
        config.resolve.alias
            // ui
            .set('@ui', resolve('./packages/jet-plan-ui'))
            .set('@theme', resolve('./packages/jet-plan-ui-theme'))
            // examples
            .set('@common', resolve('./examples/common'))
    }
}
