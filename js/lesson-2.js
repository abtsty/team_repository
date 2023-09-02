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

// ЗАДАЧА 2
// У вас є обєкт, у якому зберігаються зарплати нашої команди.
// Напишіть код, для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

const salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
};
 
function countSumSalaries(teamSalaries) {
    let total = 0;
    for (sale in teamSalaries) {
        total += teamSalaries[sale];
    }
    console.log(`Total Team Salary: ${total}`);
    return total;
}

countSumSalaries(salaries);