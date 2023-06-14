let age = prompt("Сколько Вам лет?");

switch (age) {
  case '18':
    alert('Вы совершеннолетний, все можно!');
    break;
  case '10':
    alert('Вам надо учить уроки!');
    break;
  case '30':
    alert('Ложитесь спать, завтра на работу');
    break;
  default:
    alert('Мы не знаем, что Вам делать');
}