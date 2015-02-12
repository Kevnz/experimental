//defaults
var config = {
    root: './public',
    port: process.env.PORT || 3456,
    filename: 'index.html'
}

var cling = require('static-cling').cling;
//overriding defaults
cling(config);