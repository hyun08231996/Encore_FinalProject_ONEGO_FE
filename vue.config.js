module.exports = {
    devServer: {
        proxy: "http://onegodev.ddns.net:8080"
    },
    // devServer: {
    //     proxy: "http://onego.click"
    // },
    // devServer: {
    //     proxy: "http://localhost:80"
    // },
    transpileDependencies: [
        'vuetify'
    ],
}