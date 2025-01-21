// * Завдання: Модуль 1. Змінні та типи. Основи функцій

// ? 1.	Середня складність
// ? Напиши функцію isPalindrome, яка приймає рядок і повертає true, якщо рядок є паліндромом, інакше false.

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false

// ? 2.	Середня складність
// ? Напиши функцію getMax, яка приймає три числа і повертає найбільше з них.

function getMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(getMax(4, 10, 7)); // 10
console.log(getMax(-3, -9, -1)); // -1

// ? 3.	Складна
// ? Напиши функцію convertToBinary, яка приймає десяткове число і повертає його двійкове представлення у вигляді рядка.

function convertToBinary(number) {
  if (typeof number !== 'number') {
    return false;
  }
  return number.toString(2);
}

console.log(convertToBinary(10)); // "1010"
console.log(convertToBinary(255)); // "11111111"
