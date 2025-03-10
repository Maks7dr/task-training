// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let intervalId = null;

// startBtn.addEventListener('click', () => {
//   intervalId = setInterval(() => {
//     console.log(`Start Interval ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });

// const date = new Date('1990-1-28');
// const nowDate = Date.now();

// const result = nowDate - date;

// function calculateFullDateDifference(startDate, endDate) {
//   let years = endDate.getFullYear() - startDate.getFullYear();
//   let months = endDate.getMonth() - startDate.getMonth();
//   let days = endDate.getDate() - startDate.getDate();
//   let hours = endDate.getHours() - startDate.getHours();
//   let minutes = endDate.getMinutes() - startDate.getMinutes();
//   let seconds = endDate.getSeconds() - startDate.getSeconds();

//   console.log(years);
//   console.log(months);
//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);

//   // Корекція секунд
//   if (seconds < 0) {
//     minutes--;
//     seconds += 60;
//   }

//   // Корекція хвилин
//   if (minutes < 0) {
//     hours--;
//     minutes += 60;
//   }

//   // Корекція годин
//   if (hours < 0) {
//     days--;
//     hours += 24;
//   }

//   // Корекція днів
//   if (days < 0) {
//     months--;
//     const lastDayOfMonth = new Date(
//       endDate.getFullYear(),
//       endDate.getMonth(),
//       0
//     ).getDate();
//     days += lastDayOfMonth;
//   }

//   // Корекція місяців
//   if (months < 0) {
//     years--;
//     months += 12;
//   }
//   console.log(years);
//   console.log(months);
//   console.log(days);
//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);
//   return { years, months, days, hours, minutes, seconds };
// }

// const startDate = new Date('1993-10-13 06:00:00');
// const endDate = new Date(); // Поточна дата та час

// const difference = calculateFullDateDifference(startDate, endDate);

// console.log(
//   `Різниця: ${difference.years} років, ${difference.months} місяців, ${difference.days} днів, ${difference.hours} годин, ${difference.minutes} хвилин, ${difference.seconds} секунд`
// );

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//   .catch(error => {
//     console.log(error); // "Error! Error passed to reject function"
//   });

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value'); // значенням параметра resolve буде колбек-функція методу then()
//       } else {
//         reject('error'); // значенням параметра reject буде колбек-функція методу catch()
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// console.log(window.localStorage);

// console.log(window.localStorage);

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settingsNew', JSON.stringify(settings));

// const newJson = localStorage.getItem('settingsNew');
// console.log(JSON.parse(newJson));

// const form = document.querySelector('.form');
// const localStorageText = 'add other text';

// form.elements.message.value = localStorage.getItem(localStorageText) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageText, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageText);
//   form.reset();
// });

// const form = document.querySelector('.form');
// const localStorageKey = 'goit-example-message';

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

// TODO
// 1. Проміси та then
// Напиши функцію fetchData(), яка повертає проміс, що виконується через 2 секунди і повертає рядок "Дані отримано". Використай then() для виведення результату.

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Дані отримано');
//     }, 2000);
//   });
// }

// fetchData().then(data => console.log(data));

// 2. async/await
// Перепиши функцію fetchData() з попереднього завдання, використовуючи async/await.

async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Дані отримано');
    }, 2000);
  });
}

async function main() {
  const data = await fetchData();
  console.log(data);
}

main();

// 3. Обробка помилок
// Створи функцію fetchWithError(), яка повертає проміс, що відхиляється через 2 секунди з помилкою "Помилка завантаження даних". Оброби помилку за допомогою .catch().

function fetchWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('Помилка завантаження даних');
    }, 2000);
  });
}

fetchWithError()
  .then(data => console.log(data))
  .catch(error => console.log(error));

//   4. Ланцюжок промісів
// Створи функцію, яка виконує три асинхронні виклики послідовно. Кожен виклик має тривати 1 секунду і повертати "Крок 1", "Крок 2", "Крок 3". Використай then().

function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Крок 1');
    }, 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Крок 2');
    }, 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Крок 3');
    }, 1000);
  });
}

step1()
  .then(data => {
    console.log(data);
    return step2();
  })
  .then(data => {
    console.log(data);
    return step3();
  })
  .then(data => console.log(data));

// 5. Promise.all
// Створи три функції, що повертають проміси з таймаутом у 1, 2 і 3 секунди. Використай Promise.all(), щоб дочекатися виконання всіх промісів і вивести масив результатів.

function f1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('f1');
    }, 1000);
  });
}

function f2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('f2');
    }, 2000);
  });
}

function f3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('f3');
    }, 3000);
  });
}

const p1 = f1();
const p2 = f2();
const p3 = f3();

// Promise.all([p1, p2, p3])
//   .then(data => console.log(data))
//   .catch(console.log(Error));

//   6. Promise.race
// Створи ті ж три проміси, але використай Promise.race() для отримання першого виконаного промісу.

Promise.race([p1, p2, p3])
  .then(data => console.log(data))
  .catch(error => console.log(error));

//   7. Паралельний запуск промісів
// Напиши async-функцію, яка одночасно запускає два fetch() запити до https://jsonplaceholder.typicode.com/todos/1 та https://jsonplaceholder.typicode.com/todos/2. Виведи результати.

async function fetchTodos() {
  try {
    const [todo1, todo2] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>
        response.json()
      ),
      fetch('https://jsonplaceholder.typicode.com/todos/2').then(response =>
        response.json()
      ),
    ]);

    console.log('Результат 1:', todo1);
    console.log('Результат 2:', todo2);
  } catch (error) {
    console.error('Помилка:', error);
  }
}

fetchTodos();

// 8. Очікування в циклі
// Напиши async-функцію, яка перебирає масив [1, 2, 3] і викликає асинхронну функцію fetchNumber(n), яка повертає число через 1 секунду. Використай for..of та await, щоб вивести числа послідовно.

async function fetchNewNumbers(arr) {
  for (const el of arr) {
    const result = await fetchNumber(el);
    console.log(result);
  }
}

async function fetchNumber(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
    }, 1000);
  });
}

fetchNewNumbers([1, 2, 3]).catch(error => console.error(error));

// 9. setTimeout і Promise
// Створи функцію delay(ms), яка повертає проміс, що виконується через ms мілісекунд. Використай її для створення затримки в 3 секунди перед виведенням "Час вийшов!".

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Час вийшов!');
    }, ms);
  });
}

delay(3000).then(data => console.log(data));

// 10. Асинхронний запит і обробка JSON
// Напиши async-функцію, яка отримує дані з https://jsonplaceholder.typicode.com/posts/1, розбирає JSON і виводить заголовок (title).

async function fetchToBackend() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const prom10 = await response.json();
    console.log(prom10.title);
  } catch (error) {
    console.error(error);
  }
}

fetchToBackend();
