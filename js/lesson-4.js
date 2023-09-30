// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// import cars from "./data/cars.js";
// // console.log(cars);

// const list = document.querySelector(".js-goods");
// const newElement = ({ name, img, price, description }) => {
//     const listItem = document.createElement("li");
//     const carName = document.createElement("h2");
//     const carPrice = document.createElement("h3");
//     const carDescr = document.createElement("p");
//     const carImg = document.createElement("img");

//     carName.textContent = name;
//     carPrice.textContent = `Price ${price} hrn`;
//     carDescr.textContent = description;
//     carImg.src = img;
//     carImg.alt = name;
//     carImg.width = 360;

//     listItem.append(carImg, carName, carPrice, carDescr);
//     return listItem;
// };

// const carsMarkup = cars.map(newElement);

// list.append(...carsMarkup);







// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/
// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , 
// ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН    
{/* <button class="btn">Calculate</button>? */}

const items = document.querySelector(".form");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const finalPrice = document.querySelector(".text-right");
const amount = document.querySelector(".amount");
const container = document.querySelector(".container");


items.addEventListener("submit",calculator)

function calculator (e){
    e.preventDefault();
let priceValue = price.value;
let quantityValue = quantity.value;
let totalValue = priceValue * quantityValue;
finalPrice.textContent = totalValue;
amount.textContent = quantityValue;
}
items.addEventListener("input",fixamount)
function fixamount (){
    let quantityValue = quantity.value;
    amount.textContent = quantityValue;

}

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ


const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};
container.style.backgroundColor = randomRgbColor();