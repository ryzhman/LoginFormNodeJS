module.exports = {
    entry: './src/js/script.js',
    output: {
        path: './public',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/Handlebars.min.js'
        }
    },
};