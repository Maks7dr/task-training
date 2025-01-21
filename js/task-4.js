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

// ? Завдання 5. Масив об'єктів
// ? Створи масив об'єктів products, де кожен об'єкт містить name і price. Напиши функцію, яка повертає масив назв усіх продуктів.

const products = [
  { name: 'Audi', price: 25000 },
  { name: 'BMW', price: 30000 },
  { name: 'Mazda', price: 15000 },
];

function nameCar(products) {
  const nameCars = [];
  for (let product of products) {
    nameCars.push(product.name);
  }
  return nameCars;
}

console.log(nameCar(products));

// ? Завдання 6. Звернення до властивостей у методах
// ? Додай до об'єкта user метод updateAge(newAge), який змінює значення властивості age.

const user3 = {
  name: 'Maks',
  age: 35,
  updateAge(newAge) {
    this.age = newAge;
    return this.age;
  },
};

console.log(user3.updateAge(36));

// ? Завдання 7. Синтаксис spread і rest
// ? Напиши функцію mergeObjects(obj1, obj2), яка об'єднує два об'єкти в один, використовуючи spread.

function mergeObjects(obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, g: 5 }));

// ? Завдання 8. Копіювання об'єкта
// ? Створи функцію cloneObject(obj), яка повертає точну копію переданого об'єкта.

function cloneObject(obj) {
  const copyOfObj = { ...obj };
  return copyOfObj;
}

console.log(cloneObject({ f: 7, s: 5 }));

// ? Завдання 9. Видалення властивості
// ? Напиши функцію deleteProperty(obj, key), яка видаляє властивість з об'єкта за переданим ключем.

function deleteProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    delete obj[key];
    return true;
  } else {
    return false;
    // delete obj[key];
    // return obj;
  }
}

// function deleteProperty(obj, key) {
//   return obj.hasOwnProperty(key) ? delete obj[key] : false;
// }
console.log(deleteProperty({ d: 7, c: 5, y: 89 }, 'c'));

// ? Завдання 10. Обчислювані властивості
// ? Створи функцію createObject(key, value), яка повертає об'єкт із однією властивістю, ім'я якої — значення змінної key, а значення — value.

function createObject(key, value) {
  const oneObj = { [key]: value };
  return oneObj;
}

console.log(createObject('model', 'Zaporozhets'));
