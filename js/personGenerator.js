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

    // переменные пола были изначально
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    getPerson: function () {
        //создаем свойство person в объекте personGenerator, куда помещаем пока-что пустой объект
        this.person = {};
        //в personGenerator.person.gender сгенерируем случайный пол с помощью функции randomGender
        this.person.gender = this.randomGender();// здесь будет либо "Мужчина" либо "Женщина"
        //теперь, когда у нас уже есть конкретный сгенерированный пол, мы можем выбрать имя из того JSON, который соответствует сгенерированному полу, делаем это при помощи функции randomFirstName
        let gender = this.person.gender;
        this.person.firstName = this.randomFirstName(gender);
        //возвращаем нашу персону
        return this.person;
    },

    // Math.random - случайная генерация. Math.floor - округление. Метод общий для всех.
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    // randomValue - преобразует строки из json в объект JS с помоцью свойства JSON.parse. Метод общий для всех.
    // эта функция выбирает случайное значение из любого JSON
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Метод случайной генерации Пола
    //функция, которая генерирует случайный пол - при этом мы задействуем изначальные константы GENDER_MALE и GENDER_FEMALE
    randomGender: function () {
        let random = Math.round(Math.random());
        if (random) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },

    // Метод генерации Имени в зависимости от пола
    //Функция, которая получает пол, как аргумент и в итоге выбирает нужный JSON - "мужской" или "женский"
    randomFirstName: function (gender) {
        if (gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    // Метод случайной генерации Фамилии
    // randomSurname: function() {

    //     return this.randomValue(this.surnameJson);

    // },

    // VAL Метод случайной генерации года рождения
    // randombirthYear: function() {

    //     return this.birthYear_1;

    // },
    
    
    
    
};
