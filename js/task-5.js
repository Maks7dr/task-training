// * Модуль 5. Перебираючі методи масивів

// ? Завдання 1. Метод map
// ? Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число подвоєне.

const arrow = [1, 2, 3, 4, 5, 6];

const newArrow = arrow.map(number => number * 2);
console.log(newArrow);

// ? Завдання 2. Метод flatMap
// ? Створи функцію, яка приймає масив рядків, де кожен рядок містить слова, розділені пробілами. Функція має повертати масив усіх слів.

const strArrow = [
  'Hellow World',
  'How are you',
  'I am fine',
  'What are you doing now?',
];

const newStrArrow = strArrow.flatMap(str => str.split(' '));
console.log(newStrArrow);

// ? Завдання 3. Метод filter
// ? Напиши функцію, яка повертає масив чисел більше ніж 10 із заданого масиву.

const numbers = [4, 78, 29, 12, 7, 9, 11];

const moreNumbers = numbers.filter(number => number > 10);

console.log(moreNumbers);

// ? Завдання 4. Метод find
// ? Створи функцію, яка шукає об'єкт із властивістю id у масиві об'єктів і повертає цей об'єкт.

const arrow1 = [{ id: 43 }, { id: 15000 }, { id: 456 }, { id: 35 }];

function findId(arrow1, id) {
  return arrow1.find(key => key.id === id);
}

console.log(findId(arrow1, 35));

// ? Завдання 5. Метод every
// ? Напиши функцію, яка перевіряє, чи всі елементи масиву є парними числами.

function evenNumber(arrow2) {
  return arrow2.every(number => number % 2 === 0);
}

console.log(evenNumber([2, 4, 6, 8, 8]));

// ? Завдання 6. Метод some
// ? Створи функцію, яка перевіряє, чи є хоча б один нуль у масиві чисел.

const arrow3 = [3, 60, 3, 0, 6];

const numberArrow = arrow3.some(number => number === 0);
console.log(numberArrow);

// ? Завдання 7. Метод reduce
// ? Напиши функцію, яка обчислює суму всіх чисел у масиві за допомогою методу reduce.

const arrow4 = [33, 4, 6, 88, 9];

const total = arrow4.reduce((totalSum, number) => {
  return totalSum + number;
}, 0);

console.log(total);

// ? Завдання 8. Метод toSorted
// ? Створи функцію, яка сортує масив об'єктів за властивістю price у порядку зростання.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    price: 10,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    price: 8,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    price: 7,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    price: 1,
  },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    price: 87,
  },
];

const priceSort = books.toSorted((a, b) => a.price - b.price);
// const priceSort = [...books].sort((a, b) => a.price - b.price);

console.log(priceSort);

// ? Завдання 9. Колбек-функція
// ? Напиши функцію performAction, яка приймає масив чисел і колбек-функцію, викликає колбек для кожного числа і повертає новий масив результатів.

function performAction(numArray, callback) {
  if (!Array.isArray(numArray)) {
    return 'Помилка: numArray повинен бути масивом';
  }
  if (typeof callback !== 'function') {
    return 'Помилка: callback повинен бути функцією';
  }

  return numArray.map(callback);
}

const numArraw = [4, 30, 57, 5, 34];
const doubled = performAction(numArraw, num => num * 2);
console.log(doubled);

// ? Завдання 10. Стрілочні функції
// ? Перепиши функцію із завдання 1 на стрілочний синтаксис.

const newArrow5 = arrow.map(number => number * 2);
console.log(newArrow);
