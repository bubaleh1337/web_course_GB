// let count = 0;

// function changeText() {
//   let element = document.getElementById('head1');
//   element.textContent = 'ЗАКАЗЫВАЙТЕ ТОЛЬКО У НАС 😎';

//   if (count % 2 == 0) {
//     element.append(element.textContent);
//   }
//   else {
//     element.remove(element.textContent);
//   }
//   count++;
// }

// let button = document.getElementById('bt21');
// button.addEventListener('click', changeText);

let count1 = 0;

function handler1() {
  let element = document.getElementById('head1');
  element.textContent = 'ЗАКАЗЫВАЙТЕ ТОЛЬКО У НАС 😎';

  // if (count1 % 2 == 0) {
  //   element.append(element.textContent);
  // }
  // else {
  //   element.remove(element.textContent);
  // }
  // count1++;
}
function handler2() {
  let element = document.getElementById('head1');
  element.textContent = 'СДЕЛАЕМ ВАШ БИЗНЕС ЗАМЕТНЕЕ 😍';
}

// if (count1 % 2 == 0) {
//   btn21.addEventListener('click', handler1);
//   count = 1;
// }
// else {
//   btn21.addEventListener('click', handler2);
//   count = 0;
// }

function changeText2() {
  // получаем массив:
  let titleDesc = document.getElementsByClassName('titleDesc');
  // получаем первый элемент:
  let element = titleDesc[0];
  element.classList.toggle(element.textContent = 'ЗАКАЗЫВАЙТЕ ТОЛЬКО У НАС 😎');
}
let btn21 = document.getElementById('btn21');
btn21.addEventListener('click', changeText2);