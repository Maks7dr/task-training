// * Задачі до Модуля 2 (Розгалуження і цикли)
// ? Завдання 2.1
// ? Напиши розгалуження, яке перевіряє, чи є число позитивним, негативним або нулем, і виводить відповідне повідомлення.

function numbers(num) {
  if (num > 0) {
    return `Possitive ${num}`;
  } else if (num < 0) {
    return `Negative ${num}`;
  } else {
    return 'Zero';
  }
}
console.log(numbers(10));

// ? Завдання 2.2
// ? Створи функцію, яка приймає оцінку (від 0 до 100) і повертає текстову оцінку: "Погано", "Добре", "Відмінно".

function testScore(score) {
  if (score >= 0 && score < 35) {
    return `Your score: ${score} is bad`;
  } else if (score >= 35 && score <= 70) {
    return `Your score: ${score} is good`;
  } else if (score > 70 && score <= 100) {
    return `Your score: ${score} is beautiful`;
  } else {
    return 'Invalid';
  }
}

console.log(testScore(70));

// ? Завдання 2.3
// ? Визнач, чи є рядок "JavaScript" підрядком у рядку "I love JavaScript".

const str2 = 'I love JavaScript';

console.log(str2.includes('JavaScript'));

// ? Завдання 2.4
// ? Напиши функцію, яка перевіряє, чи є рядок "Hello" початком іншого рядка.

function strIncludes(str3) {
  return str3.startsWith('Hello');
}
console.log(strIncludes('Hello World'));

// ? Завдання 2.5
// ? Створи цикл for, який обчислює суму чисел від 1 до 10.

function totalScore1(num1) {
  let totalScore = 0;
  for (let i = 1; i <= num1; i++) {
    totalScore += i;
  }
  return totalScore;
}

console.log(totalScore1(10));

// ? Завдання 2.6
// ? Реалізуй цикл while, який виводить числа від 5 до 1 у зворотному порядку.

let count = 5;
while (count >= 1) {
  console.log(count);
  count -= 1;
}

// ? Завдання 2.7
// ? Використовуй тернарний оператор, щоб перевірити, чи є число парним.

const num2 = 11;
const evenNum = num2 % 2 === 0 ? 'This is even' : 'This is odd';

console.log(evenNum);

// console.log(num2 % 2 === 0 ? 'This is true' : 'This is false');

// ? Завдання 2.8
// ? Напиши функцію, яка повертає першу літеру рядка, якщо вона є великою, інакше повертає "Літера не велика".

function letter(str4) {
  return str4[0] === str4[0].toUpperCase() ? str4[0] : 'This letter not big';
}
console.log(letter('Java'));

// ? Завдання 2.9
// ? Реалізуй цикл do...while, який запитує число у користувача, поки він не введе позитивне значення.

let num3;
do {
  num3 = parseInt(prompt('Enter a positive number: '), 10); //  Якщо пропустити основу, вона буде 10 за замовчуванням.
} while (num3 <= 0);
console.log(`You entered: ${num3}`);

// ? Завдання 2.10
// ? Напиши функцію, яка перевіряє, чи є рядок паліндромом (читається однаково з обох боків).

function palindrome(str5) {
  const reversedStr = str5.split('').reverse().join('');
  return str5 === reversedStr ? 'true' : 'false';
}

console.log(palindrome('lolol'));
