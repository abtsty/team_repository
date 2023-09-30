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
{
  /* <button class="btn">Calculate</button>? */
}

// const items = document.querySelector(".form");
// const price = document.querySelector("#price");
// const quantity = document.querySelector("#quantity");
// const finalPrice = document.querySelector(".text-right");
// const amount = document.querySelector(".amount");
// const container = document.querySelector(".container");
//
//
// items.addEventListener("submit",calculator)
//
// function calculator (e){
// e.preventDefault();
// let priceValue = price.value;
// let quantityValue = quantity.value;
// let totalValue = priceValue * quantityValue;
// finalPrice.textContent = totalValue;
// amount.textContent = quantityValue;
// }
// items.addEventListener("input",fixamount)
// function fixamount (){
// let quantityValue = quantity.value;
// amount.textContent = quantityValue;
//
// }
//
// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

//
// const randomRgbColor = () => {
// const r = Math.round(Math.random() * (255 - 1) + 1);
// const g = Math.round(Math.random() * (255 - 1) + 1);
// const b = Math.round(Math.random() * (255 - 1) + 1);
// return `rgb(${r},${g},${b})`;
// };
// container.style.backgroundColor = randomRgbColor();

// -----
// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>

// const instruments = [
  // {
    // id: 1,
    // img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
    // name: "Молоток",
    // price: 150,
  // },
  // {
    // id: 2,
    // img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
    // name: "Перфоратор",
    // price: 3000,
  // },
  // {
    // id: 3,
    // img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
    // name: "Рівень",
    // price: 2000,
  // },
// ];
// const list = document.querySelector(".js-list");
// function creatMarkup() {
  // const markup = instruments
    // .map(({ id, img, name, price }) => {
      // return `<li data-id="${id}">
    // <img src="${img}" alt="${name}">
        // <h2>${name}</h2>
            // <h3>${price}</h3>
            // <button class="btn-list">КУПИТИ</button>
// </li>`;
    // })
    // .join("");
  // list.insertAdjacentHTML("beforeend", markup);
// }
// creatMarkup();

// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
// function onClick(evt) {
  // if (!evt.target.classList.contains("btn-list")) {
    // return;
  // }
  // const cards = evt.target.closest("li");
  // const cardId = cards.dataset.id;
  // console.log(cardId);
  // console.log(evt.target.closest("li"));
  // const product = instruments.find((instrument) => instrument.id === Number(cardId));
  // console.log(product);
// }
// list.addEventListener("click", onClick);
// 
// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found
// 
// const people1 = [{
  // name: 'Alex',
  // know: ["Eva", "Jhon"],
// },
// {
  // name: 'Ivan',
  // know: ["Jhon", "Alex"],
// },
// {
  // name: 'Eva',
  // know: ["Alex", "Jhon"],
// },
// {
  // name: 'Jhon',
  // know: [],
  // }]
// const people2 = [{
  // name: 'Alex',
  // know: ["Eva", "Jhon"],
// },
// {
  // name: 'Jhon',
  // know: ["Eva"],
// },
// {
  // name: 'Eva',
  // know: [],
// },
// {
  // name: 'Ivan',
  // know: ["Jhon", "Alex"],
// }]
// 
// const people3 = [{
  // name: 'Alex',
  // know: ["Eva", "Jhon"],
// },
// {
  // name: 'Jhon',
  // know: [],
// },
// {
  // name: 'Eva',
  // know: ["Alex", "Jhon"],
// },
// {
  // name: 'Ivan',
  // know: ["Jhon", "Alex"],
  // }]
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// 
// ЗАДАЧА 3
// HTML //
<h1>Example 3</h1>
<section class="container">
    <p>Scroll to the bottom of the page. The text will transition in when it becomes visible in the viewport.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum purus non porta ullamcorper.
        Vivamus tempus, massa in posuere tincidunt, lorem purus porta est, viverra tristique ipsum eros vitae metus.
        Suspendisse sagittis neque eget finibus gravida. Etiam sem urna, pulvinar eu mattis ut, sodales non massa.
        Morbi
        viverra luctus convallis. Curabitur ac massa mauris. Curabitur ut scelerisque nunc. Nulla condimentum
        porttitor
est ac varius. Sed vel dui sed enim rutrum faucibus vitae eu eros. Curabitur eros leo, euismod ac ante eu,
        viverra malesuada diam.</p>
    <p>Nullam quis ipsum sagittis augue imperdiet fermentum. Morbi dapibus metus tempus, ullamcorper sem sit amet,
        dignissim felis. Curabitur arcu nulla, mattis hendrerit gravida at, sodales et lectus. Phasellus id porta
        quam.
        Sed in ex posuere, molestie mi eu, accumsan lectus. Cras erat massa, mollis vitae varius vel, hendrerit sit
        amet
        mi. Etiam nisl leo, sollicitudin non orci vel, lobortis consectetur metus. Sed cursus quam sapien, vehicula
        pharetra quam malesuada a. Curabitur in molestie arcu. Mauris nec leo venenatis, pulvinar lectus vel,
        convallis
        nibh. Aliquam a tellus eu metus hendrerit ultrices at blandit dolor. Praesent pharetra enim quis nunc
        bibendum,
eu facilisis lacus auctor. Aliquam erat volutpat.</p>
    <p>Nam rhoncus vel erat et efficitur. Proin iaculis molestie erat, at sagittis enim finibus non. Aliquam tempus
        elit
        sit amet leo porta, a porttitor erat consequat. Praesent faucibus odio vitae purus pharetra aliquet. Fusce
        sit
        amet interdum ante. Sed tempor, purus quis porttitor ornare, quam purus dapibus neque, dapibus vulputate
        lorem
        ex nec elit. Maecenas in auctor mi, id sodales massa. Sed orci tellus, vestibulum et euismod iaculis,
        egestas
        vitae nulla. Nam a ornare ex, in semper nisl. Aliquam venenatis tortor arcu. Integer suscipit porta arcu.
    </p>
    <p>Nam rhoncus vel erat et efficitur. Proin iaculis molestie erat, at sagittis enim finibus non. Aliquam tempus
      elit
      sit amet leo porta, a porttitor erat consequat. Praesent faucibus odio vitae purus pharetra aliquet. Fusce
        sit
        amet interdum ante. Sed tempor, purus quis porttitor ornare, quam purus dapibus neque, dapibus vulputate
        lorem
        ex nec elit. Maecenas in auctor mi, id sodales massa. Sed orci tellus, vestibulum et euismod iaculis,
        egestas
        vitae nulla. Nam a ornare ex, in semper nisl. Aliquam venenatis tortor arcu. Integer suscipit porta arcu.
    </p>
    <h2 class="animated-text">Animated Text</h2>
</section>
// CSS//
// p {
  // line-height: 20px;
// }
// .container {
  // height: 1800px;
  // width: 500px;
  // margin: 100px auto;
// }
// 
// .animated-text {
  // font-size: 30px;
  // text-align: center;
  // opacity: 0;
  // transform: translateY(100px);
  // transition: opacity 1s ease, transform 1s ease;
// }
// 
// .animated-text.visible {
  // opacity: 1;
  // transform: translateX(0);
// }
// УМОВА ЗАДАЧІ
// Написати код який запускає анімацію для тексту коли користувач доскролює до конкретного контенту
// 