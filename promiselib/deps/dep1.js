module.exports = {
    makeJsonify: function (data) {
        return function() {
            return '{"data":"'+data+'"}';
        }
    }
}
