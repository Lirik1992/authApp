var RegisterController = (function () {
    'use strict';
    var registerMethod = function (evt) {
        evt.preventDefault();

        var registerForm = {
            name: document.getElementsByName("name")[0].value,
            email: document.getElementsByName("email")[0].value,
            username: document.getElementsByName("username")[0].value,
            password: document.getElementsByName("password")[0].value
        };
        var result = UserService.register(registerForm);
    
    };

    return {
        register: registerMethod
    };
})();