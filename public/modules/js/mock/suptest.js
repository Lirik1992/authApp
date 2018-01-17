var Http = (function () {
    
    function Http(method, url, data, callback) {
        this.method = method;
        this.url = url;
        this.data = data;

        var body = JSON.stringify(data);
        var xhr = new XMLHttpRequest()
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                callback(xhr.responseText);
            }
        };
        xhr.send(body);
    }

    var privateGet = function (url, cb) {
        Http('GET', url, null, cb);
    };

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

