// TODO 1. Конвертер температур (Модуль 1: змінні, типи, функції)

// ? Напиши функцію convertTemperature(value, scale), яка конвертує температуру:

// ? Зі шкали Цельсія в Фаренгейт і навпаки.
// ? Використовуй формули:

// ? Функція повинна приймати число та рядок ('C' або 'F') і повертати конвертоване значення.

// function convertTemperature(value, scale) {
//   if (scale === 'C') {
//     const valueF = (value * 9) / 5 + 32;
//     return `${valueF} F`;
//   } else if (scale === 'F') {
//     const valueC = ((value - 32) * 5) / 9;
//     return `${valueC} C`;
//   } else {
//     return ` Це не температура!`;
//   }
// }

// console.log(convertTemperature(-10, 'F'));

const newTemperatyre = (value, scale) => {
  return scale === 'F'
    ? `${(value * 9) / 5 + 32} F`
    : `${((value - 32) * 5) / 9} C`;
};

console.log(newTemperatyre(30, 'F'));

// ? 2. Визначення типу даних (Модуль 1: змінні, оператори порівняння)
// ? Напиши функцію getType(value), яка приймає один аргумент та повертає його тип ("string", "number", "boolean" тощо).

function getType(value) {
  console.log(typeof value);
}

getType(42); // "number"
getType('Hello'); // "string"
getType(true); // "boolean"

// ? 3. Перевірка пароля (Модуль 2: розгалуження, логічні оператори)
// ? Напиши функцію checkPassword(password), яка перевіряє безпеку пароля за такими критеріями:

// ? Мінімальна довжина — 8 символів.
// ? Має містити хоча б одну цифру.
// ? Має містити хоча б одну велику літеру.
// ? Повертає true, якщо пароль сильний, і false інакше.

function checkPassword(password) {
  const minLength = 8;
  const hasDigit = /[0-9]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);

  return password.length >= minLength && hasDigit && hasUppercase;
}

const password1 = 'StrongPass123';
const password2 = 'weakpass';

console.log(checkPassword(password1)); // Виведе: true
console.log(checkPassword(password2)); // Виведе: false

// ? 4. Підрахунок голосних у слові (Модуль 2: методи рядків, цикли)
// ? Напиши функцію countVowels(str), яка підраховує кількість голосних (a, e, i, o, u) у рядку.

// ? Використовуй цикл або метод split + filter.

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const newStr = str
    .toLowerCase()
    .split('')
    .filter(vowel => vowels.includes(vowel));
  return newStr.length;
}
console.log(countVowels('hello')); // 2
console.log(countVowels('javascript')); // 3

// ?📌 Модуль 1: Змінні та типи даних
// ? Напиши функцію checkDataType(value), яка приймає будь-яке значення і повертає його тип ("string", "number", "boolean", "object", "array" або "function").

function checkDataType(value) {
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

console.log(checkDataType(42)); // "number"
console.log(checkDataType('Hello')); // "string"
console.log(checkDataType([1, 2, 3])); // "array"
console.log(checkDataType({ name: 'Alice' })); // "object"
console.log(checkDataType(() => {})); // "function"

// ? 📌 Модуль 2: Методи рядків
// ? Напиши функцію countWords(str), яка підраховує кількість слів у рядку (слова розділені пробілами).

function countWords(str) {
  return str.trim().split(' ').length;
}

console.log(countWords('Hello world!')); // 2
console.log(countWords('JavaScript is awesome!')); // 3
console.log(countWords('   Trim these spaces   ')); // 3

// ? 📌 Модуль 2: Цикли
// ? Напиши функцію filterEvenNumbers(numbers), яка повертає масив лише з парних чисел.

// function filterEvenNumbers(numbers) {
//   let newEverNum = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       newEverNum.push(number);
//     }
//   }
//   return newEverNum;
// }

const numbers = [1, 2, 3, 4, 5, 6, 8];

// console.log(filterEvenNumbers(numbers));

const filterEvenNumbers = numbers.filter(number => number % 2 === 0);

console.log(filterEvenNumbers);

// ? 📌 Модуль 3: Масиви та функції
// ? Напиши функцію average(numbers), яка знаходить середнє значення чисел у масиві.

function average(numbers) {
  return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}

console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([10, 20, 30, 40])); // 25

// ? 📌 Модуль 3: Масиви та методи
// ? Напиши функцію countUniqueValues(arr), яка підраховує кількість унікальних значень у масиві.

function countUniqueValues(arr) {
  return new Set(arr).size;
}

console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5])); // 5
console.log(countUniqueValues(['apple', 'banana', 'apple', 'orange'])); // 3

// ? 📌 Модуль 3: Ітерація по масиву
// ? Напиши функцію findLongestWord(words), яка знаходить найдовше слово у масиві.

function findLongestWord(words) {
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

console.log(findLongestWord(['apple', 'banana', 'strawberry'])); // "strawberry"
console.log(findLongestWord(['dog', 'elephant', 'cat'])); // "elephant"

// ? 📌 Модуль 4: Масив об'єктів
// ? Напиши функцію increaseSalary(employees, percentage), яка збільшує зарплату кожного співробітника на вказаний відсоток.

function increaseSalary(employees, percentage) {
  return employees.map(employee => ({
    ...employee,
    salary: employee.salary + (employee.salary * percentage) / 100,
  }));
}

const employees = [
  { name: 'Alice', salary: 1000 },
  { name: 'Bob', salary: 2000 },
];

console.log(increaseSalary(employees, 10));
