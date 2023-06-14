
function changedLinksColor() {
  // получаем массив:
  let title = document.getElementsByClassName('ull1');
  // получаем первый элемент:
  let element = title[0];
  element.classList.toggle('activeUl');
}

let link = document.getElementById('link');
// console.log(btn);
link.addEventListener('click', changedLinksColor);