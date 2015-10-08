var dep1 = require('./deps/dep1.js');
var dep2 = require('./deps/dep2.js');
var http = require('http');
var Promise = require('promise');

function initAll(stuffToInject) {
    return {
        jsonify: dep1.makeJsonify(stuffToInject),
        htmlify: dep2.makeHtmlify(stuffToInject)
    }

}

module.exports = function () {
    return (new Promise(function (resolve, reject) {
        http.get('http://crossorigin.me/http://whatthecommit.com/index.txt', function (resp) {
            var body = '';
            resp.on('data', function(chunk) { body += chunk; });
            resp.on('end', function() { resolve(body.replace('\n','')) });
        })
        .on('error', function (e) { reject(e); });
    })).then(initAll);
};
