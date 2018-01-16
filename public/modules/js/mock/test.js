var YourService = {

    get: function (url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    if(cb && typeof(cb) == "function") {
                        cb(xhr.responseType ,xhr.responseText);
                    } 
                }
            }
        };
        xhr.send();
    },


    post: function (url, data, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    if(cb && typeof(cb) == "function") {
                        cb(xhr.responseType ,xhr.responseText);
                    } 
                }
            }
        };
        xhr.send(JSON.stringify(data));
    }

};

YourService.get("http://localhost:3000/users/getall", function (data) {
    alert("button on get correct " + data);
});

YourService.post("http://localhost:3000/users/register", { name: "Dimoooon", email: "ds@dsj.ru", username: "Dimon", password: "111" }, function (err, data) {
    alert("button on post correct " + data)
});
