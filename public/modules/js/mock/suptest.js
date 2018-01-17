var Http = (function () {

    /** An Http constructor 
     *  - method: (GET || POST) 
     *  - url: String
     *  - data: (Object)
     *  - callback: function(data) {typeof return === json}
     * @param {*} method 
     * @param {*} url 
     * @param {*} data 
     * @param {*} callback 
     */
    function Http(method, url, data, callback) {
        this.method = method;
        this.url = url;
        this.data = data;

        var body = JSON.stringify(data);
        var xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                callback(xhr.responseText + xhr.status);
            }
        };
        xhr.send(body);
    }

    /**Http property
     * @param {string} url 
     * @param {function} cb 
     */
    var privateGet = function (url, cb) {
        Http('GET', url, null, cb);
    };

    /**Http property
     * @param {string} url 
     * @param {object} data 
     * @param {function} cb 
     */
    var privatePost = function (url, data, cb) {
        Http('POST', url, data, cb);
    }

    return {
        get: privateGet,
        post: privatePost
    }
})();

Http.get("http://localhost:3000/users/getall", function (data) {
    alert("button on get correct " + data);
});

Http.post("http://localhost:3000/users/register",
    {
        name: "Dimoooon",
        email: "ds@dsj.ru",
        username: "Dimon",
        password: "111"
    }, function (data) {
        alert("button on post correct " + data)
    }
);

