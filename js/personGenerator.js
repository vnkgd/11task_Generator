// Объект, в котором всё крутится
const personGenerator = {

    // Джейсон с фамилиями
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    // Джейсон с Мужскими именами
    firstNameMaleJson: `{                                      
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    // VAL Добавил Json с женскими именами
    firstNameFemaleJson: `{                                    
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Ирина",
            "id_3": "Надежда",
            "id_4": "Настя",
            "id_5": "Татьяна",
            "id_6": "Екатерина",
            "id_7": "Оксана",
            "id_8": "Ольга",
            "id_9": "Владислава",
            "id_10": "Вероника"
        }
    }`,

    //  обнулить значение пола, вот только зачем, не понятно
    Gender_Parameter: '',

    // переменные пола были изначально
    // GENDER_MALE: 'Мужчина',
    // GENDER_FEMALE: 'Женщина',

    // randomGender: function() {                          //  Метод случайной генерации Фамилии
        
    //     return this.randomValue(this.gender);

    // },
    
    // Math.random - случайная генерация. Math.floor - округление. Метод общий для всех.
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    // randomValue - преобразует строки из json в объект JS с помоцью свойства JSON.parse. Метод общий для всех.
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Либо:


    // randomFirstName: function() {                        //  Метод случайной генерации Имени, которая была изначально

    //     return this.randomValue(this.firstNameMaleJson);

    // },

    // gender = randomValue(0, 1) == 1 ? 'Мужчина' : 'Женщина',  -Вариант использования тернарного оператора, но он не работает в нашем случае

    //  Метод случайной генерации Пола
    randomGender: function (Gender_Parameter) {
        this.randomIntNumber() == 0 ? this.Gender_Parameter = 'Мужчина' : this.Gender_Parameter = 'Женщина';
        return this.Gender_Parameter;
    },

    // Либо так, как пишет Олег, но тоже не работает как надо
    // randomFirstName: function (gender) {
    //     if (gender == 'Мужчина') {
    //         return this.randomValue(this.firstNameMaleJson);
    //     } else {
    //         return this.randomValue(this.firstNameFemaleJson);
    //     }
    // },

    //  Метод генерации Имени в зависимости от пола
    randomFirstName: function (Gender_Parameter) {                    
        if (Gender_Parameter == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
       
    //  Метод случайной генерации Фамилии
    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    // VAL Метод случайной генерации года рождения
    randombirthYear: function() {

        return this.birthYear_1;

    },

    // метод getPerson продолжает выполнение в другом файле init.js
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender(); //  Вывод Пола
        this.person.firstName = this.randomFirstName(); // Вывод Имени
        this.person.surname = this.randomSurname(); //  Вывод Фамилии
        this.person.birthYear = this.randombirthYear(); //  Вывод года рождения

        // возвращаем данные персоны
        return this.person;
    }
};
