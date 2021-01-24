// randomValue: function (json) {
//     const obj = JSON.parse(json);
//     const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
//     return obj.list[prop];
// };

// randomIntNumber = function () { 
//     (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
// };

randomValue = function (json) {
        // const obj = JSON.parse(json);
        // const prop = `id_${this.randomIntNumber()}`;  // this = personGenerator
        // return obj.list[prop];
    };

gender = randomValue(0, 1) == 1 ? 'Мужчина' : 'Женщина';
console.log=(gender);
// document.getElementById('genderOutput').innerText = initPerson.gender;