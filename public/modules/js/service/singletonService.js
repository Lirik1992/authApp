
// Экземпляр в статическом свойстве

function Service() {
    // Имеется ли экземпляр, созданный ранее
    if (typeof Service.instance === "object") {
        return Service.instance;
    }

    // Создаем новые экземпляры
    this.get = function () {
        console.log("Get");
    }
    this.post = function () {
        console.log("Post")
    }

    //Сохраняем экземпляр
    Service.instance = this;

    //Неявный возврат экземпляра
    return this;
}

var MyService = new Service();
var MyService2 = new Service();

console.log(MyService === MyService2);

MyService.get();
MyService.post();
