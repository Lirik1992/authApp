var LoginController = (function () {
    "use strict"
    var loginMethod = function (evt) {
        evt.preventDefault();

        var loginForm = {
            username: document.getElementsByName("username")[0].value,
            password: document.getElementsByName("password")[0].value
        };
        var result = UserService.login(loginForm);
    }

    return {
        login: loginMethod
    };
})();