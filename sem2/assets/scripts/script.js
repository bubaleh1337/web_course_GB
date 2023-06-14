// let namePeople = "Nikita";
// alert(`Hello, ${namePeople}!`);

// let element = document.getElementById('el1');
// console.log(element);
// // добавили класс:
// element.classList.add('active');
// // удалили класс:
// element.classList.remove('active');

let count = 0;

function changedColor() {
  // получаем массив:
  let title = document.getElementsByClassName('title');
  // получаем первый элемент:
  let element = title[0];
  // Math.random() * 10 - 0 до 1;
  // if (count % 2 == 0) {
  //   // добавляем класс:
  //   element.classList.add('activeBox');
  // }
  // else {
  //   element.classList.remove('activeBox');
  // }
  // count++;

  // можно всё, что описано выше по замене цвета, в одну строку:
  element.classList.toggle('activeTitle');
}

let btn = document.getElementById('btn');
// console.log(btn);
btn.addEventListener('click', changedColor);