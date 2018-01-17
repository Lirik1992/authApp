
// Экземпляр в статическом свойстве

function Service() {
    if (typeof Service.instance === "object") {
        return Service.instance;
    }

    this.get = function () {
        console.log("Get");
    }

    this.post = function () {
        console.log("Post")
    }

    Service.instance = this;
    return this;
}

var MyService = new Service();
var MyService2 = new Service();

console.log(MyService === MyService2);

MyService.get();
MyService.post();
