// ЗАДАЧА1.ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Введіть свої данні");
// const mail = prompt("Введіть свою пошту");
// const tel = prompt("Введіть свій телефон");

// console.log(`КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${mail} ПОЧТУ І ${tel} ТЕЛЕФОН`);

// ЗАДАЧА 2
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

//const priceOne = Number(prompt("Введіть ціну телевізора"));
//const priceTwo = +prompt("Введіть ціну холодильника");
//const priceThree = +prompt("Введіть ціну ноутбука");

//console.log(priceOne + priceTwo + priceThree);


////ЗАДАЧА 3
////ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
////"СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
////"НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt("How monthes in the year?"));
// if (month === 12) {
//     console.log("correct");
// } else {
//   console.log("incorrect")
// }
 
// ЗАДАЧА 4
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

//const number = Number(prompt("Парне?"));
//1 V
// if (number % 2 === 0) {
//     console.log(true);
    
// } else {
//     console.log(false);
//}
//2 V
// const newNumber = number % 2 === 0 ? true : false;
// console.log(newNumber)

// ! ЗАДАЧА 6
//НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ
// let userBirthdayMonth = Number(prompt('Enter your Birthday Month:'));

// function birthdayMonth() {
//     // Зима
// if (userBirthdayMonth === 1 || userBirthdayMonth === 2 || userBirthdayMonth === 12) {
//     console.log('Ви народилися взимку');
// }
// // Весна
// else if (userBirthdayMonth >=  3 && userBirthdayMonth <=  5) {
//     console.log('Ви народилися на весні');
// }
// // Літо
// else if (userBirthdayMonth >=  6 && userBirthdayMonth <=  8) {
//     console.log('Ви народилися влітку');
// }
// // Осінь
// else if (userBirthdayMonth >=  9 && userBirthdayMonth <=  11) {
//     console.log('Ви народилися восени');
// }
// // Некоректне значення
// else {
//     console.log('Ви ввели некоректне значення. Визначити пору року вашого народження неможливо!');
//     const newChack = confirm('Ви ввели некоректне значення. Визначити пору року вашого народження неможливо! Будь ласка введіть коректно місяць вашого народження');

//     do
//     { userBirthdayMonth = Number(prompt('Enter your Birthday Month:')); }
//     while (newChack === false)

//     if (newChack === true) {
//         userBirthdayMonth = Number(prompt('Enter your Birthday Month:'));
//     }
//     else {
//         confirm('Ви ввели некоректне значення. Визначити пору року вашого народження неможливо! Будь ласка введіть коректно місяць вашого народження');
//         userBirthdayMonth = Number(prompt('Enter your Birthday Month:'));
//     }
// }
// }

// birthdayMonth();

// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles.splice(1, 1, "Класика");
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.splice(0, 0, "Реп", "Регги");
// console.log(styles);

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false
// let word = str.split("").reverse().join("");
// console.log(str === word);
// let anotherWord = newString.split("").reverse().join("");
// console.log(newString === anotherWord);

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
 const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
console.log(findSmallestNumber([2, 17, 94, 1, 23, 37])); 
console.log(findSmallestNumber([49, 4, 83, 7, 12]));

function findSmallestNumber(numbers) {

    let anotherNumber = numbers[0];
    for (const number of numbers) {
        if (anotherNumber > number) {
            anotherNumber = number
        }
            
    }
    return anotherNumber
}
