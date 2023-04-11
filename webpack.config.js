const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
    externals: {
        vue: 'Vue'
    }
};