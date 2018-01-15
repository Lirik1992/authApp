
var data = {
    name: 'Monax',
    email: 'monk@list.ru',
    username: 'mon',
    password: '111'
}

function User(data) {
    this.loginForm = {
        username: data.username,
        password: data.password
    }
    this.registerForm = {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password
    }
};
User.prototype.post = (function (url) {
    var xhr = new XMLHttpRequest();
    var data = {
        name: 'Monax',
        email: 'monk@list.ru',
        username: 'mon',
        password: '111'
    }
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'applicatiion/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if(xhr.status == 200) {
                console.log(xhr.responseText);
            } else {
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send(JSON.stringify(data));
});

var user = new User(data);

user.post('http://localhost:3000/users/register');








// Object.defineProperty(this, 'post', {
//     get: function () {
//         var xhr = new XMLHttpRequest();
//         var body = JSON.stringify(registerForm);
//         xhr.open('POST', url);
//         xhr.setRequestHeader('Content-Type', 'applicatiion/json');
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     console.log(xhr.responseText);
//                 } else {
//                     console.log(xhr.responseText);
//                 }
//             }
//         }
//         xhr.send(registerForm);
//     }
// })