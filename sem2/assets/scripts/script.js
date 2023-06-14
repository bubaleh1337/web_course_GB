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
  let box = document.getElementsByClassName('box');
  // получаем первый элемент:
  let element = box[0];
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
  element.classList.toggle('activeBox');
}

let btn = document.getElementById('btn');
// console.log(btn);
btn.addEventListener('click', changedColor);