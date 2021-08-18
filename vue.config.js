module.exports = {
    devServer: {
        proxy: "http://onegodev.ddns.net:8080"
    },
    // devServer: {
    //     proxy: "http://onego.click"
    // },
    transpileDependencies: [
        'vuetify'
    ],
}