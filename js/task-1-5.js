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
    return 'Invalid input';
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
  for (let i = 1; i <= n; i++) {
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
  // const newStr = str.split('');
  const vowels = ['a', 'e', 'o', 'i', 'u'];
  let count = 0;
  for (const element of str.toLowerCase()) {
    if (vowels.includes(element)) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels('hello')); // 2
console.log(countVowels('programming')); // 3

// ? 6.	Складна
// ? Напиши функцію getPrimes, яка приймає число n і повертає масив усіх простих чисел від 2 до n.

// function getPrimes(n) {
//   let newArray = [];
//   for (let i = 2; i <= n; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }

// Вірший код
function getPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
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
  return [...reverseArray].reverse();
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

function deepClone(obj11) {
  if (obj11 === null || typeof obj11 !== 'object') {
    return obj11; // Якщо це примітив або null, повертаємо його
  }

  if (Array.isArray(obj11)) {
    // Якщо це масив, копіюємо елементи
    return obj11.map(item => deepClone(item));
  }

  // Якщо це об'єкт, створюємо новий об'єкт і копіюємо властивості
  const result = {};
  for (const key in obj11) {
    if (obj11.hasOwnProperty(key)) {
      result[key] = deepClone(obj11[key]);
    }
  }
  return result;
}

// Перевірка роботи функції
const obj11 = { a: 1, b: { c: 2 } };
const cloned = deepClone(obj11);
cloned.b.c = 3;
console.log(obj11.b.c); // 2

// ? 15.	Складна
// ? Напиши функцію getValueByPath, яка приймає об'єкт і рядок, що представляє шлях до властивості, і повертає значення цієї властивості.

function getValueByPath(obj, path) {
  if (!obj || !path) {
    return undefined; // Обробка випадків, коли об'єкт або шлях відсутні
  }

  const pathParts = path.split('.'); // Розбиваємо шлях на частини

  let current = obj;

  for (const part of pathParts) {
    if (current && current.hasOwnProperty(part)) {
      current = current[part];
    } else {
      return undefined; // Якщо частина шляху не існує, повертаємо undefined
    }
  }

  return current; // Повертаємо значення, знайдене за шляхом
}

const obj = { a: { b: { c: 42 } } };
console.log(getValueByPath(obj, 'a.b.c')); // 42

// *Завдання: Модуль 5. Перебираючі методи масивів
// ? 16.	Середня складність
// ? Напиши функцію doubleNumbers, яка приймає масив чисел і повертає новий масив, де кожне число подвоєне, використовуючи метод map.

function doubleNumbers(arrayNumbers2) {
  const result2 = arrayNumbers2.map(number => number * 2);
  return result2;
}

console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

// ? 17.	Середня складність
// ? Напиши функцію filterEvenNumbers, яка використовує метод filter для вибору тільки парних чисел.

function filterEvenNumbers(arrayNumbers3) {
  return arrayNumbers3.filter(element => element % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4])); // [2, 4]

// ? 18.	Складна
// ? Напиши функцію sumNumbers, яка обчислює суму чисел у масиві за допомогою методу reduce.

function sumNumbers(arrayNumbers4) {
  const totalScore = arrayNumbers4.reduce((total, number) => {
    return total + number;
  }, 0);
  return totalScore;
}

console.log(sumNumbers([1, 2, 3, 4])); // 10

// ? 19.	Складна
// ? Напиши функцію groupBy, яка приймає масив і функцію-ключ і групує елементи за ключем.

const groupBy = (arr10, keyFn) => {
  const result = {}; // Создаем пустой объект для хранения групп
  for (const item of arr10) {
    // Итерируемся по входному массиву
    const key = keyFn(item); // Получаем ключ для текущего элемента
    if (!result.hasOwnProperty(key)) {
      // Проверяем, существует ли уже такой ключ в объекте result
      result[key] = []; // Если ключа нет, создаем новый пустой массив для этого ключа
    }
    result[key].push(item); // Добавляем текущий элемент в массив, соответствующий его ключу
  }
  return result; // Возвращаем объект сгруппированных данных
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// { '4': [4.2], '6': [6.1, 6.3] }

// ? 20.	Складна
// ? Напиши функцію sortObjectsByKey, яка сортує масив об'єктів за переданим ключем.

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
];

function sortObjectsByKey(users, age) {
  const newAge = users.toSorted((a, b) => a[age] - b[age]);
  return newAge;
}

console.log(sortObjectsByKey(users, 'age'));
// [{ name: "Bob", age: 20 }, { name: "Alice", age: 25 }]

// ? 1. Использование map
// ? Дан массив чисел. Используя метод map, получи массив, в котором все числа увеличены в 2 раза.

const numbers = [2, 5, 10, 20]; // Результат: [4, 10, 20, 40]

const newArrayNumbers = numbers.map(arr => arr * 2);
console.log(newArrayNumbers);

// ? 2. Использование flatMap
// ? Дан массив пользователей с их заказами. Используя flatMap, получи массив всех заказов.

const users10 = [
  { name: 'Alice', orders: ['Pizza', 'Burger'] },
  { name: 'Bob', orders: ['Sushi'] },
  { name: 'Charlie', orders: ['Pasta', 'Salad'] },
];
// Результат: ["Pizza", "Burger", "Sushi", "Pasta", "Salad"]

const newArrayUsers = users10.flatMap(order => order.orders);
console.log(newArrayUsers);

// ? 3. Использование filter
// ? Дан массив чисел. Используя filter, оставь только четные числа.

const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Результат: [2, 4, 6, 8, 10]

const newEvenNumbers = numbers10.filter(
  number => number !== 0 && number % 2 === 0
);
console.log(newEvenNumbers);

// ? 4. Использование find
// ? Дан массив пользователей. Найди первого пользователя, чей возраст больше 25 лет.

const users11 = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 27 },
  { name: 'Charlie', age: 30 },
];
// Результат: { name: "Bob", age: 27 }

const firstAge = users11.find(user => user.age > 25);
console.log(firstAge);

// ? 5. Использование every
// ? Дан массив оценок студентов. Проверь, все ли студенты получили оценку выше 50.

const grades = [60, 80, 75, 90, 100, 55];
// Результат: true

const grades2 = [60, 45, 75, 90, 100, 55];
// Результат: false

const students = arr => arr.every(student => student > 50);

console.log(students(grades)); // true
console.log(students(grades2)); // false

// ? 6. Использование some
// ? Дан массив заказов. Проверь, есть ли среди них заказ со стоимостью больше 5000.

const orders = [
  { id: 1, price: 1200 },
  { id: 2, price: 3400 },
  { id: 3, price: 7000 },
  { id: 4, price: 1500 },
];
// Результат: true

const newOrders = arr => arr.some(item => item.price > 5000);
console.log(newOrders(orders));

// ? 7. Использование reduce
// ? Дан массив чисел. Найди сумму всех элементов.

const numbers11 = [1, 2, 3, 4, 5];
// Результат: 15

const newArrayNumbers1 = arr =>
  arr.reduce((total, item) => {
    return (total += item);
  }, 0);

console.log(newArrayNumbers1(numbers11));

// ? 8. Использование reduce для объединения объектов
// ? Дан массив товаров. Создай объект, в котором ключами будут категории товаров, а значениями — массивы товаров этой категории.

const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' },
  { name: 'Pants', category: 'Clothing' },
];

// Результат:
// {
//   Electronics: ["Laptop", "Phone"],
//   Clothing: ["Shirt", "Pants"]
// }

const newObj = obj =>
  obj.reduce((result, item) => {
    if (!result[item.category]) {
      result[item.category] = [];
    }
    result[item.category].push(item.name);
    return result;
  }, {});

console.log(newObj(products));

// ? 9. Использование toSorted
// ? Дан массив студентов с их баллами. Отсортируй их по убыванию баллов.

const students10 = [
  { name: 'Alice', score: 90 },
  { name: 'Bob', score: 75 },
  { name: 'Charlie', score: 85 },
];

// Результат:
// [
//   { name: "Alice", score: 90 },
//   { name: "Charlie", score: 85 },
//   { name: "Bob", score: 75 }
// ]

const newArrayStudents = arr => arr.toSorted((a, b) => b.score - a.score);
console.log(newArrayStudents(students10));

// ? 10. Комплексное задание (сочетание методов)
// ? Дан массив товаров с ценами. Получи массив названий товаров, цена которых выше 1000, отсортированный по убыванию цены.

const products12 = [
  { name: 'Laptop', price: 1500 },
  { name: 'Phone', price: 900 },
  { name: 'TV', price: 2000 },
  { name: 'Keyboard', price: 700 },
];

// Результат: ["TV", "Laptop"]

const newArrayProdeucts = arr =>
  arr
    .toSorted((a, b) => b.price - a.price)
    .filter(item => item.price > 1000)
    .map(it => it.name);

console.log(newArrayProdeucts(products12));
