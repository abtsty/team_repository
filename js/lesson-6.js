// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())
// 40327918 - ba28b3f3e38de725167cd32ac;
// https://pixabay.com/api/

fetch("https://pixabay.com/api/?key=40327918-ba28b3f3e38de725167cd32ac")
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.status || resp.statusText);
    }
    return resp.json();
  })
  .then((data) => markup(data.hits))
  .catch((err) => console.log(err));

function markup(options) {
  const divEl = document.createElement("div");
  const items = options.map(({ webformatURL, tags }) => {
    const img = document.createElement("img");
    img.src = webformatURL;
    img.alt = tags;
    img.width = 300;
    return img;
  });
  divEl.append(...items);
  const div = document.querySelector(".l6t1");
  div.appendChild(divEl);
}
