let button = document.getElementById('bt21');

function changeText() {
  let element = document.getElementById('head1');
  element.textContent = 'До встречи';
  console.log(element);
}

button.addEventListener('click', changeText);