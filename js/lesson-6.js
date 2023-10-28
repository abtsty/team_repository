// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())
// 40327918 - ba28b3f3e38de725167cd32ac;
// https://pixabay.com/api/

// fetch("https://pixabay.com/api/?key=40327918-ba28b3f3e38de725167cd32ac")
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.status || resp.statusText);
//     }
//     return resp.json();
//   })
//   .then((data) => markup(data.hits))
//   .catch((err) => console.log(err));

// function markup(options) {
//   const divEl = document.createElement("div");
//   const items = options.map(({ webformatURL, tags }) => {
//     const img = document.createElement("img");
//     img.src = webformatURL;
//     img.alt = tags;
//     img.width = 300;
//     return img;
//   });
//   divEl.append(...items);
//   const div = document.querySelector(".l6t1");
//   div.appendChild(divEl);
// }

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //

// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)
// if (data.items.length > 0) {
//   // перевіряємо, чи є результати
//   renderCollection(data.items);
//   currentPage++; // збільшуємо змінну currentPage
// } else {
//   alert("No more results."); // повідомляємо користувача, що більше результатів немає
// }
const refs = {
  formEl: document.querySelector("#form"),
  inputEl: document.querySelector("#input"),
  containerEl: document.querySelector(".container"),
  buttonEl: document.querySelector(".loadBtn"),
};
let page = 1;

const submitForm = async (evt) => {
  evt.preventDefault();
  const inputValue = refs.inputEl.value;
  try {
    const data = await axios.get(
      `https://api.github.com/search/users?q=${inputValue}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${page}&per_page=5`
    );
    if (data.data.items && data.data.items.length > 0) {
      searchEl(data.data.items);
      page++;
    } else {
      alert("No more results.");
    }
  } catch (error) {
    console.log(error);
  }
};
refs.buttonEl.addEventListener("click", submitForm);
refs.formEl.addEventListener("submit", submitForm);
//login - name, avatar_url: - foto, html_url- gitHub

function searchEl(items) {
  items.forEach(({ login, avatar_url, html_url }) => {
    const markupEl = ` 
        <h2>${login}</h2>
  <img src="${avatar_url}" alt="${login}" width="200">
  <a href="${html_url}">git hub link</a>`;
    refs.containerEl.insertAdjacentHTML("beforeend", markupEl);
  });
}

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

//   <div id='root'>
//     <form id='form'>
//         <input type="text" id="input">
//       <button>Пошук</button>
//     </form>
//   </div>
