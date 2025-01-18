// * Задачі на всі модулі (змішані)

// ? Завдання 4.1
// ? Напиши функцію, яка приймає масив чисел і повертає масив парних чисел.

function arrayNumbers(numbers) {
  let newNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 0 && number !== 0) {
      newNumbers.push(number);
    }
  }
  return newNumbers;
}

console.log(arrayNumbers([13, 2, 0, 46, 7, 8]));

// ? Завдання 4.2
// ? Створи функцію, яка рахує кількість голосних літер у рядку.

function letter(str) {
  let totalVolwe = 0;
  const strToLowerCase = str.toLowerCase();
  const volwe = ['a', 'e', 'i', 'o', 'u'];
  for (const item of strToLowerCase) {
    if (volwe.includes(item)) {
      totalVolwe += 1;
    }
  }
  return totalVolwe;
}

console.log(letter('Hello world'));

// ? Завдання 4.3
// ? Реалізуй функцію, яка приймає число і повертає його факторіал.

function factorials(oneNumber) {
  let totalFactorials = 1;
  for (let i = 1; i <= oneNumber; i++) {
    totalFactorials *= i;
  }
  return totalFactorials;
}

console.log(factorials(5));

// ? Завдання 4.4
// ? Створи функцію, яка обчислює площу круга за заданим радіусом.

function areaСircle(radiuce) {
  return Math.PI * radiuce ** 2;
}
console.log(areaСircle(3));

// ? Завдання 4.5
// ? Напиши функцію, яка приймає два рядки і перевіряє, чи є один з них анаграмою іншого.

function auditStr(firstStr, secondStr) {
  const sortedFirst = firstStr.split('').sort().join('');
  const sortedSecond = secondStr.split('').sort().join('');
  return sortedFirst === sortedSecond;
}

console.log(auditStr('qwert', 'tqwre'));

// ? Завдання 4.6
// ? Визнач, чи є всі числа у масиві [2, 4, 6, 8] парними.

const evenArray = [2, 4, 6, 8];
function evenNumber(evenArray) {
  let evenTotal = 0;
  for (const even of evenArray) {
    if (even % 2 === 0) {
      evenTotal += 1;
    }
  }
  return evenTotal === evenArray.length ? true : false;
}

console.log(evenNumber(evenArray));

// ? Завдання 4.7
// ? Напиши функцію, яка повертає масив чисел від 1 до N.

function arrayNumbersN(N) {
  let newArrayN = [];
  for (let i = 1; i <= N; i++) {
    newArrayN.push(i);
  }
  return newArrayN;
}

console.log(arrayNumbersN(5));

// ? Завдання 4.8
// ? Реалізуй функцію, яка повертає новий масив із унікальними елементами масиву [1, 2, 2, 3, 4, 4, 5].

function uniqueArray(array1) {
  let newUniqueArra = [];
  for (const element of array1) {
    if (!newUniqueArra.includes(element)) {
      newUniqueArra.push(element);
    }
  }
  return newUniqueArra;
}

console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));

// ? Завдання 4.9
// ? Створи функцію, яка повертає найбільше число у масиві [10, 20, 5, 7, 100].

function bigNumber(numbersBig) {
  let maxNumber = numbersBig[0];
  for (let i = 1; i < numbersBig.length; i++) {
    if (numbersBig[i] > maxNumber) {
      maxNumber = numbersBig[i];
    }
  }
  return maxNumber;
}
console.log(bigNumber([10, 20, 5, 7, 100]));

// ? Завдання 4.10
// ? Реалізуй функцію, яка обчислює середнє арифметичне масиву чисел.

function average(array2) {
  let avaregeTotal = 0;
  for (const element3 of array2) {
    avaregeTotal += element3;
  }
  return avaregeTotal / array2.length;
}

console.log(average([1, 2, 3, 4, 15]));
