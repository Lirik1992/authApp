var Http = (function () {

    var privateGet = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (callback && typeof (callback) == "function") {
                        callback(xhr.responseType, xhr.responseText);
                    }
                }
            }
        };
        xhr.send();
    };

    var get = function(address, cb) {
        privateGet(address, cb);
    }

    var privatePost = function(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    if(callback && typeof(callback) == "function") {
                        callback(xhr.responseType ,xhr.responseText);
                    } 
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }

    var post = function(address, info, cb) {
        privatePost(address, info, cb);
    }


    return {
        get: get,
        post: post
    }
})();

Http.get("http://localhost:3000/users/getall", function (data) {
    alert("button on get correct " + data);
});

Http.post("http://localhost:3000/users/register", { name: "Dimoooon", email: "ds@dsj.ru", username: "Dimon", password: "111" }, function (err, data) {
    alert("button on post correct " + data)
});

