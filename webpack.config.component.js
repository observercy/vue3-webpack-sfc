const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/HelloWorld.vue',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'HelloWorld.js',
        library: {
            name: 'HelloWorld',
            type: 'umd'
        }
    },
    resolve: {
        alias: {
            vue: "@vue/runtime-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: {
        vue: 'Vue'
    }
};
