// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

function Person(firstName, lastName, age, gender, interest) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;

    // this.bio = function () {
    //     console.log(
    //         `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
    //     );
    // };
    // this.greeting = function () {
    //     console.log(`Привіт, я ${this.firstName}`);
    // };
}
Person.prototype.bio = function () {
    console.log(
        `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
    );
};
Person.prototype.greeting = function () {
    console.log(`Привіт, я ${this.firstName}`);
};
const newPerson = new Person("Mango", "Cooper", 19, "female", "JS");

console.log(newPerson);
newPerson.bio();
newPerson.greeting();
