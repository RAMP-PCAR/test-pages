var x = require('./index.js');

x().then(function(gapi) {
    console.log(gapi.jsonify());
    console.log(gapi.htmlify());
});
