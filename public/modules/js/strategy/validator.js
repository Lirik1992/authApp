// Strategy pattern 
// Form validator example

// Some data (ex. form data)
var data = {
    name: 'Dima',
    email: '@&#F.df',
    username: 'Lirik',
    password: '111'
}

// Validator configuration
// Набор правил для определения допустимого значения
validator.config = {
    name: 'isNotEmpty',
    email: 'isEmailValid',
    username: 'isAlphaNum'
}

// Validator Object
var validator = {

    // Все доступные проверки
    types: {

    },

    // Сообщения об ошибках в текущем сеансе проверки
    messages: [],

    // Текущие параметры проверки
    // имя: тип проверки
    config: {
        name: 'isNotEmpty',
        email: 'isEmailValid',
        username: 'isAlphaNum'
    },

    // Аргумент data - это пары key => value
    validate: function (data) {
        var item, msg, type, checker, resultOk;

        // Delete messages
        this.messages = [];

        for (item in data) {
            if (data.hasOwnProperty(item)) {
                type = this.config[item];
                checker = this.types[type];

                if (!type) {
                    continue;
                }
                if (!checker) {
                    throw {
                        name: 'Validation Error',
                        message: 'No handler to validate type ' + type
                    };
                }
                resultOk = checker.validate(data[i]);
                if (!resultOk) {
                    msg = 'Invalid value for *' + item + '*, ' + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    // Additional method
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

// Validate launch
validator.validate(data);
if (validator.hasErrors()) {
    console.log(validator.messages.join('/n'));
}

// Проверяет на пустую строку
validator.types.isNotEmpty = {
    validate: function (value) {
        if (value !== '')
            return value;
    },
    instructions: 'the value can not be empty'
};

// Проверяет валидность мыла
validator.types.isEmailValid = {
    validate: function (value) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    instructions: 'the email is not valid, please try to put a valid email'
}

// Проверяет содержит ли значение только буквы и цифры
validator.types.isAlphaNum = {
    validate: function (value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: 'the value can only contain characters and numbers, no special symbols allowed'
};