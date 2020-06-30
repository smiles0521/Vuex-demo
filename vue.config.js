module.exports = {
    assetsDir: 'statics/app',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.mock.com',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}
