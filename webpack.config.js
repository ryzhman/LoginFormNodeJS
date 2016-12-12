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
    },
    module: {
        loaders: [{
            test: /\.hbs/,
            loader: "handlebars-template-loader"
        }]
    },
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
};