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

function changeText() {
  let element = document.getElementById('head1');
  element.textContent = 'ЗАКАЗЫВАЙТЕ ТОЛЬКО У НАС 😎';
  
  if (count1 % 2 == 0) {
    element.append(element.textContent);
  }
  else {
    element.remove(element.textContent);
  }
  count1++;
}
let btn21 = document.getElementById('btn21');
btn21.addEventListener('click', changeText);