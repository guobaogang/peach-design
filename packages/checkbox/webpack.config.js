const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'checkbox.js',
        publicPath: '/',
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        symlinks: true
    },
    externals: {
        "react": 'react',
        "react-dom": 'react-dom'
    },
    module: {
        rules: [{
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: []
}