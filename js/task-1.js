// * Задачі до Модуля 1 (Змінні та типи. Основи функцій)

// ? Завдання 1.1
// ? Оголоси змінну для зберігання віку користувача і привласни їй значення 25.

const age = 35;
console.log(age);

// ? Завдання 1.2
// ? Оголоси дві змінні для зберігання імені та прізвища. Об'єднай їх у повне ім'я за допомогою шаблонного рядка.

const firstName = 'Maks';
const secondName = 'Drachenko';
const fullName = `${firstName} ${secondName}`;

console.log(fullName);

// ? Завдання 1.3
// ? Обчисли площу прямокутника зі сторонами 10 і 5 та збережи результат у змінній.

const a = 10;
const b = 5;
const square = a * b;

console.log(square);

// ? Завдання 1.4
// ? Оголоси змінну з початковим значенням null. Заміни її значення на рядок "Hello!".

let str = null;
str = 'Hello!';

console.log(str);

// ? Завдання 1.5
// ? Створи функцію, яка приймає два числа як параметри і повертає їх суму.

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 7));

// ? Завдання 1.6
// ? Перетвори рядок "123" у число і додай до нього 10.

const str1 = '123';
const num = Number.parseInt(str1);
const sumNumbers = num + 10;

console.log(sumNumbers);

// ? Завдання 1.7
// ? Визнач, чи є число 10 більшим за 7, використовуючи оператор порівняння.

// const firstNum = a;
// const secondNum = b;
function comparison(a, b) {
  return a > b;
}

console.log(comparison(10, 7));

// ? Завдання 1.8
// ? Оголоси змінну, яка буде зберігати результат ділення 100 на 3. Перевір її тип даних.

let total = 0;

function division(a, b) {
  total = a / b;
  return total;
}

console.log(division(100, 3));
console.log(typeof total);

// ? Завдання 1.9
// ? Створи функцію, яка приймає ім'я користувача і повертає привітання у форматі: "Hello, [name]!".

function userName(user) {
  return `Hello, ${user}!`;
}

console.log(userName('Maks'));

// ? Завдання 1.10
// ? Напиши функцію, яка приймає три числа і повертає їх середнє арифметичне.

function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(3, 6, 9));
