module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    configureWebpack: {
        devtool: 'source-map'
    },
    transpileDependencies: ['ansi-regex']
};