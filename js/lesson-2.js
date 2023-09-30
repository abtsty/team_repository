// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);
// // console.log(userKeys);

// for (let key of userKeys) {
//     console.log(`${key}: ${user[key]}`);
// }

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;

const calculator = {
    a: null,
    b: null,

    read() {
        this.a = prompt("valueA");
        this.b = prompt("valueB");
    },

    sum() {
        return Number(this.a) + Number(this.b);
    },

    mult() {
        return this.a * this.b;
    },
};

calculator.read();
console.log(`sum`, calculator.sum());
console.log(`mult`, calculator.mult());

// ЗАДАЧА 2
// У вас є обєкт, у якому зберігаються зарплати нашої команди.
// Напишіть код, для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

// const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
// };

// function countSumSalaries(teamSalaries) {
//     let total = 0;
//     for (sale in teamSalaries) {
//         total += teamSalaries[sale];
//     }
//     console.log(`Total Team Salary: ${total}`);
//     return total;
// }

// <<<<<<< HEAD
// // countSumSalaries(salaries);

// // 5)відфільтрувати, хто народився в 15,16,17ст;
// const scientists = [
//     {
//       name: "Albert",
//       surname: "Einstein",
//       born: 1879,
//       dead: 1955,
//       id: 1,
//     },
//     {
//       name: "Isaac",
//       surname: "Newton",
//       born: 1643,
//       dead: 1727,
//       id: 2,
//     },
//     {
//       name: "Galileo",
//       surname: "Galilei",
//       born: 1564,
//       dead: 1642,
//       id: 3,
//     },
//     {
//       name: "Marie",
//       surname: "Curie",
//       born: 1867,
//       dead: 1934,
//       id: 4,
//     },
//     {
//       name: "Johannes",
//       surname: "Kepler",
//       born: 1571,
//       dead: 1630,
//       id: 5,
//     },
//     {
//       name: "Nicolaus",
//       surname: "Copernicus",
//       born: 1473,
//       dead: 1543,
//       id: 6,
//     },
//     {
//       name: "Max",
//       surname: "Planck",
//       born: 1858,
//       dead: 1947,
//       id: 7,
//     },
//     {
//       name: "Katherine",
//       surname: "Blodgett",
//       born: 1898,
//       dead: 1979,
//       id: 8,
//     },
//     {
//       name: "Ada",
//       surname: "Lovelace",
//       born: 1815,
//       dead: 1852,
//       id: 9,
//     },
//     {
//       name: "Lise",
//       surname: "Meitner",
//       born: 1878,
//       dead: 1968,
//       id: 11,
//     },
//     {
//       name: "Sarah E.",
//       surname: "Goode",
//       born: 1855,
//       dead: 1905,
//       id: 10,
//     },
//     {
//       name: "Hanna",
//       surname: "Hammarström",
//       born: 1829,
//       dead: 1909,
//       id: 12,
//     },
// ];

// // console.log(scientists.filter(({ born }) => born >= 1400 && born <= 1699));

// // 6)знайти рік народження Albert Einstein;

// const burnDataEinstein = scientists.find(({ name, surname }) => name === "Albert" && surname === "Einstein").born;
// console.log(burnDataEinstein);



// ЗАДАЧА 1 
// Створіть карточки товару з масиву використовуючи createElement


