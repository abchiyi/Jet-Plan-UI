const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            template: 'public/index.html',
            entry: 'src/main.js',
            filename: 'index.html'
        }
    },
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
            .set('@', resolve('./packages'))
    }
}
