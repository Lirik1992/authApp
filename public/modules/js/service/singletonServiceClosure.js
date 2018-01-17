
// Экземпляр в замыкании

function Singleton() {
    var instance = this;


    this.get = function() {
        console.log('Get');
    };

    this.post = function() {
        console.log('Post');
    }

    // Переопределить конструктор
    Singleton = function() {
        return instance;
    };
}

var a = new Singleton();
var b = new Singleton();

console.log(a === b);

a.post();
b.get();