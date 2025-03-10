// ? Задача 1. Привітання з користувачем
// ? Напишіть функцію, яка запитує у користувача його ім'я (використовуючи prompt), перевіряє, чи воно не порожнє. Якщо ім'я введено, привітайте користувача, використовуючи шаблонний рядок. Якщо порожнє, попросіть ввести ім'я ще раз.

// function greetUser() {
//   let userName;
//   do {
//     userName = prompt("Будь ласка, введіть ваше ім'я:"); // Запит імені
//     if (userName === null) {
//       // Обробка випадку, коли користувач натиснув "Cancel"
//       return 'Користувач скасував введення.';
//     }
//   } while (userName.trim() === ''); // Перевірка на порожній рядок (з урахуванням пробілів)

//   return `Привіт, ${userName}!`; // Привітання з використанням шаблонного рядка
// }

// const greeting = greetUser();
// alert(greeting); // Виведення привітання на екран

// ? Задача 2. Парні та непарні числа
// ? Створіть функцію, яка приймає масив чисел, проходить по ньому циклом і повертає об'єкт із двома полями:
// ? •	even — масив парних чисел.
// ? •	odd — масив непарних чисел.

function evenAndOdd(array1) {
  const evenArr = [];
  const oddArr = [];
  for (const arr of array1) {
    if (arr % 2 === 0) {
      evenArr.push(arr);
    } else {
      oddArr.push(arr);
    }
  }
  return {
    even: evenArr,
    odd: oddArr,
  };
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ? Задача 3. Фільтрація за умовою
// ? Напишіть програму, яка приймає масив об'єктів, що представляють людей (з полями name і age), та повертає масив імен людей, старших за 18 років. Використовуйте методи масивів.

const users = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 16 },
  { name: 'Jim', age: 25 },
  { name: 'Jill', age: 18 },
];

const newUsers = users.filter(user => user.age > 18).map(user => user.name);

console.log(newUsers);

// ? Задача 4. Пошук найбільшого числа
// ? Створіть функцію, яка приймає масив чисел і повертає найбільше число. Реалізуйте це без використання Math.max, а за допомогою циклу for.

function findLargestNumber(array2) {
  let largestNumber = array2[0];
  for (let i = 1; i < array2.length; i += 1) {
    if (array2[i] > largestNumber) {
      largestNumber = array2[i];
    }
  }
  return largestNumber;
}

console.log(findLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ? Задача 5. Заміна значень у масиві
// ?Напишіть функцію, яка приймає масив чисел і змінює всі від’ємні значення на 0. Використовуйте метод map.

function replaceNegativeNumbers(array3) {
  return array3.map(num => (num < 0 ? 0 : num));
}

console.log(replaceNegativeNumbers([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]));

// ? Задача 6. Статистика студентів
// ? Напишіть програму, яка приймає масив об'єктів студентів з полями name, marks (масив оцінок). Функція повинна повертати об'єкт із середнім балом кожного студента та масивом студентів, які мають середній бал вище 75.

const students = [
  { name: 'John', marks: [85, 90, 88] },
  { name: 'Jane', marks: [70, 75, 80] },
  { name: 'Jim', marks: [60, 70, 75] },
  { name: 'Jill', marks: [80, 90, 95] },
];

function getAverageMark(student) {
  const sum = student.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / student.marks.length;
}

function getStudentsWithAverageMarkAbove(students, value) {
  return students.filter(student => getAverageMark(student) > value);
}

function getStudentsInfo(students) {
  return students.map(student => ({
    name: student.name,
    averageMark: getAverageMark(student),
  }));
}

console.log(getStudentsInfo(students));
console.log(getStudentsWithAverageMarkAbove(students, 75));
