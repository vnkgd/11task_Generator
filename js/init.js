
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    // находим элемент firstNameOutput и меняем текст с помощью innerText на firstName
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    // VAL добавили вывод Фамилии, пола, года:
    // document.getElementById('surnameOutput').innerText = initPerson.surname;
    
    // document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};

