module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.js$/,
            exclude: './node_modules/',
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};