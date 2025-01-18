// *Модуль 4. Об'єкти
// ? Завдання 1. Створення об'єкта
// ? Створи об'єкт користувача user з полями name, age та методом sayHello, який виводить у консоль повідомлення: "Привіт, я [name]".

const user = {
  name: 'Maks',
  age: 35,
  sayHello() {
    return `Привіт, я ${this.name}`;
  },
};

console.log(user.sayHello());

// ? Завдання 2. Додавання властивостей
// ? Додай до об'єкта user властивість isAdmin зі значенням true.

const user1 = {
  name: 'Maks',
  age: 35,
};
user1.isAdmin = true;

console.log(user1);

// ? Завдання 3. Оновлення значень
// ? Зміни значення властивості age об'єкта user на 30.

const user2 = {
  name: 'Maks',
  age: 35,
};
user2.age = 30;

console.log(user2);

// ? Завдання 4. Перебирання об'єкта
// ? Напиши функцію, яка отримує об'єкт і повертає масив його ключів.

function object1(user2) {
  let arrow = [];
  for (const key in user2) {
    arrow.push(key);
  }
  return arrow;
}

console.log(object1(user2));
