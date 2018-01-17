// Factory example

// Родительский конструктор
function HttpRequestMaker() { }

// Метод предка
HttpRequestMaker.prototype.get = function (callback) {
    console.log('Get ' + this.url);
    callback();
}
HttpRequestMaker.prototype.post = function (data, callback) {
    console.log('Post ' + this.url);
    callback();
}

// Статический фабричный метод
HttpRequestMaker.factory = function (type) {
    var constr = type, 
    newhttp;

    // Ошибка, если контруктор для запрошенного типа отсутствует
    if(typeof HttpRequestMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + 'does not exists'
        }
    }

    // Т.к. конструктор существует, определяем отношения наследования с предком, но один раз
    if(typeof HttpRequestMaker[constr].prototype.get !== 'function' &&
    typeof HttpRequestMaker[constr].prototype.post !== 'function') {
        HttpRequestMaker[constr].prototype = new HttpRequestMaker();
    }

    // Создать новый экземпляр
    newhttp = new HttpRequestMaker[constr]();

//  Тут можно вызвать какие-либо доп. методы

    // Вернуть объект
    return newhttp;
}

// Спец конструкторы
HttpRequestMaker.SimpleGet = function() {
    this.url = 'http://localhost:3000/users/getall';
}
HttpRequestMaker.SimplePost = function() {
    this.url = 'http://localhost:3000/users/register';
}


// Test factory
var getGet = HttpRequestMaker.factory('SimpleGet');
var postPost = HttpRequestMaker.factory('SimplePost');

getGet.get(function() {
    console.log('Get callback worked');
});

postPost.post({}, function(callback) {
    console.log('Post callback worked');
});
