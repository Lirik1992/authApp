/**
 *  Simple service for authorization and registration, cookie with token
 * 
 *  author: Likharev Dmitry
 */


var UserService = (function () {
    'use strict';

    // Login, call cookie creator and redirect to still nothing

    var loginMethod = function (loginForm) {

        var loginRequest = new XMLHttpRequest();
        var login = JSON.stringify(loginForm);
        loginRequest.open('POST', 'http://localhost:3000/users/authenticate');
        loginRequest.setRequestHeader('Content-type', 'application/json');
        loginRequest.onreadystatechange = function () {
            if (loginRequest.readyState == 4) {
                if (loginRequest.status == 200) {
                    setCookie(loginRequest.responseText);
                    $(location).attr('href', 'mainpage.html');
                } else {
                    console.log(loginRequest.responseText);
                }
            }
        };
        loginRequest.send(login);
    };

    // Register new user, if OK redirect to login page, else TODO: work with errors properly here or on the back

    var registerMethod = function (registerForm) {

        var request = new XMLHttpRequest();
        var body = JSON.stringify(registerForm);
        request.open('POST', 'http://localhost:3000/users/register');
        request.setRequestHeader('Content-type', 'application/json');
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    $(location).attr('href', 'lirikloginform.html');
                } else {
                    alert(request.responseText);
                }
            }
        };
        request.send(body);
    };

    // Cookie, the default one  TODO: replace it with js-cookie
    // TOKEN is here, pull it with
    // document.cookie.split('=').splice(1, 1)[0]

    // expiration is set to 7 days from NOW

    function setCookie(info) {

        var responseArray = JSON.parse(info);
        var token = responseArray.token.split(' ').splice(1, 1)[0];
        var date = new Date;
        date.setDate(date.getDate() + 7);
        document.cookie = 'token=' + token + ';path=/;' + 'expires=' + date.toUTCString();
    }

    return {
        login: loginMethod,
        register: registerMethod
    };
})();



// let tokenAccess = new XMLHttpRequest();
// let token = document.cookie.split('=').splice(1, 1)[0];
// tokenAccess.open('GET', 'http://localhost:3000/users/profile');
// tokenAccess.setRequestHeader('Authorization', token);
// tokenAccess.onreadystatechange = function () {
//     if (tokenAccess == 4) {
//         if (tokenAccess == 200) {
//             $(location).attr('href', 'mainpage.html');
//         } else {
//             console.log(tokenAccess.responseText);
//         }
//     }
// };