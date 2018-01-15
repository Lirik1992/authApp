;(function () {
    let tokenAccess = new XMLHttpRequest();
    let token ='Bearer ' + document.cookie.split('=').splice(1, 1)[0];
    tokenAccess.open('GET', 'http://localhost:3000/users/profile');
    tokenAccess.setRequestHeader('Authentication', token);
    tokenAccess.onreadystatechange = function () {
        if (tokenAccess == 4) {
            if (tokenAccess == 200) {
                alert(tokenAccess.responseText + tokenAccess.responseType);
            } else {
                console.log(JSON.stringify(tokenAccess.responseText));
            }
        }
    };
    tokenAccess.send();
})();