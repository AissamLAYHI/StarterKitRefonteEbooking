const path = require('path');

module.exports = { 
    entry:{
       etape1: './src/main/sources/es6/components/etape1.es6',
       etape2: './src/main/sources/es6/components/etape2.es6'
    },
    
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, './src/main/webapp/static/commun/js')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './src/main/webapp/WEB-INF/freemarker/'),
        index: 'index.html',
        port: 9000
    }
};
