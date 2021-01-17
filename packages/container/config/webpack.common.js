
module.exports = {
    mode: 'common', // mode is default - updated with development or production
    devServer: { // common uses deafault
        port: 80,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [ ], // common uses empty plugins
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            },
        ]
    }
};


