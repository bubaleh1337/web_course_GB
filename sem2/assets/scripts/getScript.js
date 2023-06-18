async function start() {
  // создали переменную с адресом
  let url = 'https://jsonplaceholder.typicode.com/users/'
  // отправляем запрос
  let response = await fetch(url);
  // сохраняем ответ сервера в формате json в переменную
  let users = await response.json();
  console.log(users);
}

start();