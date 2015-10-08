var dep1 = require('./deps/dep1.js');
var dep2 = require('./deps/dep2.js');
var request = require('request');
var Promise = require('bluebird');

function initAll(stuffToInject) {
    return {
        jsonify: dep1.makeJsonify(stuffToInject),
        htmlify: dep2.makeHtmlify(stuffToInject)
    }

}

module.exports = function () { 
    return (new Promise(function (resolve, reject) {
        request('http://whatthecommit.com/index.txt', function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body.replace('\n',''));
            }
        });
    })).then(initAll);
};
