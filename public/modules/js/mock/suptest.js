var Http = (function () {
    function UniversalRequest(method, url, data, callback) {
        this.method = method;
        this.url = url;
        this.data = data;
        this.callback = callback;
        var self = this;

        var body = JSON.stringify(data);
        var xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.send(body);
    }

    var privateGet = function (url, callback) {
        UniversalRequest('GET', url, callback);
    };

    var privatePost = function (url, data, callback) {
        UniversalRequest('POST', url, data, callback);
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
    }, function (err, data) {
        alert("button on post correct " + data)
    });

