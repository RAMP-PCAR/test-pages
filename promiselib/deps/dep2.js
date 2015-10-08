module.exports = {
    makeHtmlify: function (data) {
        return function() {
            return '<p>'+data+'</p>';
        }
    }
}
