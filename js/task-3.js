// * Задачі до Модуля 3 (Масиви і функції)

// ? Завдання 3.1
// ? Створи масив із 5 чисел і обчисли їхню суму.

function sortArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(sortArray([5, 7, 10, 2, 24]));

// ? Завдання 3.2
// ? Напиши функцію, яка приймає масив і повертає його останній елемент.

function lastElement(array) {
  return array[array.length - 1];
}

console.log(lastElement(['HTML', 'CSS', 'Java', 'Javascript']));

// ? Завдання 3.3
// ? Використовуй метод slice() для створення нового масиву, який містить перші три елементи масиву [1, 2, 3, 4, 5].

const firstArray = [1, 2, 3, 4, 5];
const newArray = firstArray.slice(0, 3);
console.log(newArray);

// ? Завдання 3.4
// ? Створи функцію, яка приймає масив чисел і повертає новий масив, де всі числа помножені на 2.

function multiplicationArray(array1) {
  let element = [];
  for (const element1 of array1) {
    element.push(element1 * 2);
  }
  return element;
}

console.log(multiplicationArray([3, 2, 6, 4, 5]));

// ? Завдання 3.5
// ? Напиши цикл for...of, який виводить всі елементи масиву у консоль.

const array2 = [3, 2, 6, 4, 5];

for (const item of array2) {
  console.log(item);
}

// ? Завдання 3.6
// ? Додай новий елемент у масив на початок і виведи результат.

const array3 = [3, 4, 5];
array3.unshift(1, 2);

console.log(array3);

// ? Завдання 3.7
// ? Реалізуй функцію, яка об'єднує два масиви в один за допомогою методу concat().

function twoArrow(firstArray1, secondArray1) {
  return firstArray1.concat(secondArray1);
}

console.log(twoArrow([1, 2, 3], [4, 5, 6]));

// ? Завдання 3.8
// ? Визнач, чи є число 7 у масиві [1, 2, 3, 7, 8, 9], використовуючи метод includes().

// function arrayIncludes(array4) {
//   if (array4.includes(7)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(arrayIncludes([1, 2, 3, 7, 8, 9]));

const array4 = [1, 2, 3, 7, 8, 9];
// const incl = array4.includes(7) ? true : false;
// console.log(incl);

console.log(array4.includes(7));
// console.log(array4.includes(7) ? true : false);

// ? Завдання 3.9
// ? Створи масив рядків і перетвори його у один рядок через кому за допомогою join().

const array5 = ['HTML', 'CSS', 'Phyton', 'Java'];
const newString = array5.join(', ');
console.log(newString);
// console.log(array5.join(', '));

// ? Завдання 3.10
// ? Реалізуй функцію, яка приймає масив і повертає кількість елементів, більших за 10.

function arrayNumbers(numbers) {
  let newArrayNumbers = [];
  for (const number of numbers) {
    if (number >= 10) {
      newArrayNumbers.push(number);
    }
  }
  return newArrayNumbers.length;
}

console.log(arrayNumbers([5, 8, 11, 25, 3, 67]));
