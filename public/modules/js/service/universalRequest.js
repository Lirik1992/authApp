const POST = 'POST', GET = 'GET', CONTENT_TYPE = 'Content-Type', 
APPLICATION = 'application/json', REQUEST = new XMLHttpRequest;

var data = {
    name: 'Rick',
    email: 'rick@list.ru',
    username: 'sanchez',
    password: '111'
}

UniversalRequest('POST', 'http://localhost:3000/users/authenticate', data);

function UniversalRequest(method, url, data) {
    this.method = method;
    this.url = url;
    this.data = data;

    let body = JSON.stringify(data);
    REQUEST.open(method, url);
    REQUEST.setRequestHeader(CONTENT_TYPE, APPLICATION);
    REQUEST.onreadystatechange = function () {
        if (REQUEST.readyState == 4) {
            if (REQUEST.status == 200) {
                console.log(REQUEST.responseText);
            } else {
                console.log(REQUEST.responseType + REQUEST.responseText + REQUEST.status);
            }
        }
    };
    REQUEST.send(body);
}


