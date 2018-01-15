var UserService = (function () {
    "use strict"

    var loginMethod = function (loginForm) {

        var token;
        var user;
        
        var loginRequest = new XMLHttpRequest();
        var login = JSON.stringify(loginForm);
        loginRequest.open('POST', 'http://localhost:3000/users/authenticate')
        loginRequest.setRequestHeader('Content-type', 'application/json');
        loginRequest.send(login);

        if (loginRequest.status != 200) {
            alert(loginRequest.status + ': ' + loginRequest.responseType);
        } else {
            alert(loginRequest.responseText);
            window.location.href('mainpage.html');
        }
    }

    var registerMethod = function (registerForm) {

        var request = new XMLHttpRequest();
        var body = JSON.stringify(registerForm);
        request.open('POST', 'http://localhost:3000/users/register');
        request.setRequestHeader('Content-type', 'application/json');
        request.send(body);

        if (request.status != 200) {
            alert(request.status + ': ' + request.responseType);
        } else {
            alert(request.responseText);
            window.location.href('http://127.0.0.1:5500/public/lirikloginform.html');
        }
    }

    return {
        login: loginMethod,
        register: registerMethod
    };
})();