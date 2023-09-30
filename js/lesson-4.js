// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

import cars from "./data/cars.js";
// console.log(cars);

const list = document.querySelector(".js-goods");
const newElement = ({ name, img, price, description }) => {
    const listItem = document.createElement("li");
    const carName = document.createElement("h2");
    const carPrice = document.createElement("h3");
    const carDescr = document.createElement("p");
    const carImg = document.createElement("img");

    carName.textContent = name;
    carPrice.textContent = `Price ${price} hrn`;
    carDescr.textContent = description;
    carImg.src = img;
    carImg.alt = name;
    carImg.width = 360;

    listItem.append(carImg, carName, carPrice, carDescr);
    return listItem;
};

const carsMarkup = cars.map(newElement);

list.append(...carsMarkup);
