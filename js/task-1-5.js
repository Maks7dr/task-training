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

// * Завдання: Модуль 2. Розгалуження і цикли

// ? 4.	Середня складність
// ? Напиши функцію fizzBuzz, яка приймає число n і виводить у консоль числа від 1 до n, але:
// ?	замість чисел, що діляться на 3, виводиться "Fizz",
// ?	замість чисел, що діляться на 5, виводиться "Buzz",
// ? 	замість чисел, що діляться на 3 і 5 одночасно, виводиться "FizzBuzz".

function fizzBuzz(n) {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(10));

// ? 5.	Середня складність
// ? Напиши функцію countVowels, яка приймає рядок і повертає кількість голосних у ньому.

function countVowels(str) {
  const newStr = str.split('');
  const vowel = ['a', 'e', 'o', 'i', 'y'];
  let strLenght = 0;
  for (const element of newStr) {
    if (vowel.includes(element)) {
      strLenght += 1;
    }
  }
  return strLenght;
}

console.log(countVowels('hello')); // 2
console.log(countVowels('programming')); // 3

// ? 6.	Складна
// ? Напиши функцію getPrimes, яка приймає число n і повертає масив усіх простих чисел від 2 до n.

function getPrimes(n) {
  let newArray = [];
  for (let i = 2; i <= n; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log(getPrimes(10)); // [2, 3, 5, 7]

// ? 7.	Складна
// ? Напиши функцію factorial, яка обчислює факторіал числа n за допомогою циклу.

function factorial(n) {
  let totalFactorial = 1;
  for (let i = 1; i <= n; i++) {
    totalFactorial *= i;
  }
  return totalFactorial;
}

console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800

// * Завдання: Mодуль 3. Масиви і функції
// ? 8.	Середня складність
// ? Напиши функцію getOddNumbers, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

function getOddNumbers(arrayNumbers) {
  let newArrayNumbers = [];
  for (const number of arrayNumbers) {
    if (number % 2 !== 0) {
      newArrayNumbers.push(number);
    }
  }
  return newArrayNumbers;
}

console.log(getOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]

// ? 9.	Середня складність
// ? Напиши функцію getReversedArray, яка приймає масив і повертає новий масив у зворотному порядку.

function getReversedArray(reverseArray) {
  return reverseArray.reverse();
}

console.log(getReversedArray([1, 2, 3])); // [3, 2, 1]

// ? 10.	Складна
// ? Напиши функцію getArrayIntersection, яка приймає два масиви чисел і повертає масив, що містить лише спільні елементи.

function getArrayIntersection(arr1, arr2) {
  let newArrow = [];
  for (const arr of arr1) {
    if (arr2.includes(arr)) newArrow.push(arr);
  }
  return newArrow;
}

console.log(getArrayIntersection([1, 2, 3], [2, 3, 4])); // [2, 3]

// ? 11.	Складна
// ? Напиши функцію flattenArray, яка приймає багаторівневий масив і повертає його однорівневий варіант.

function flattenArray(levelArray) {
  return levelArray.flat(Infinity);
}

// function flattenArray(levelArray) {
//   let newArrow = [];
//   for (const item of levelArray) {
//     if (Array.isArray(item)) {
//       newArrow.push(...flattenArray(item));
//     } else {
//       newArrow.push(item);
//     }
//   }
//   return newArrow;
// }

console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

// * Завдання: Mодуль 4. Об'єкти
// ? 12.	Середня складність
// ? Напиши функцію getKeys, яка приймає об'єкт і повертає масив його ключів.

function getKeys(obj4) {
  let arr3 = [];
  for (const key in obj4) {
    arr3.push(key);
  }
  return arr3;
}
console.log(getKeys({ a: 1, b: 2, c: 3 })); // ["a", "b", "c"]

// ? 13.	Середня складність
// ? Напиши функцію mergeObjects, яка приймає два об'єкти і повертає новий об'єкт, що об'єднує їхні властивості.

function mergeObjects(obj2, obj3) {
  let newObj = { ...obj2, ...obj3 };
  return newObj;
}

console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }

// ? 14.	Складна
// ? Напиши функцію deepClone, яка створює глибоку копію переданого об'єкта.

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Якщо це примітив або null, повертаємо його
  }

  if (Array.isArray(obj)) {
    // Якщо це масив, копіюємо елементи
    return obj.map(item => deepClone(item));
  }

  // Якщо це об'єкт, створюємо новий об'єкт і копіюємо властивості
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}

// Перевірка роботи функції
const obj = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj);
cloned.b.c = 3;
console.log(obj.b.c); // 2
