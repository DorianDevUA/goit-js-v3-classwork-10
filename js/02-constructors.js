// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// =============================================================
// class User {
//   constructor() {
//     console.log('constructor call');
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}

// =============================================================
// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const dorian = new User('dorian', 'dorian.devua@gmail.com');
// console.log(dorian); // {}

// =============================================================
// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const dorian = new User('Dorian', 'dorian.devua@gmail.com');
// console.log(dorian); // { name: 'Dorian', email: 'dorian.devua@gmail.com' }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User('Poly', 'poly@mail.com');
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// =============================================================
// Об'єкт параметрів
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// =============================================================
// Методи класу
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const dorian = new User({
//   name: 'Dorian',
//   email: 'dorian.devua@gmail.com',
// });

// console.log(dorian.getEmail()); // "dorian.devua@gmail.com"

// dorian.changeEmail('new@mail.com');

// console.log(dorian.getEmail()); // "new@mail.com"

// ==============================================================
// Прототип екземпляру
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // “mango@mail.com”
// console.log(mango);

// ============================================================
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

// ==============================================================
// Приватні властивості
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango);
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// ===============================================================
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // "mango@supermail.com"

// ==============================================================
// Приватні методи
// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"
// console.log(mango);

// // Прямий виклик приватного методу ззовні призведе до помилки
// // mango.#validateEmail('test'); // Помилка

// ====================================================================
// Геттери і сеттери
// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     if (newEmail === '') {
//       console.log('Помилка! Пошта не може бути порожнім рядком!');
//       return;
//     }

//     this.#email = newEmail;
//   }
// }

// const dorian = new User({ name: 'Dorian', email: 'dorian.devua@gmail.com' });
// console.log(dorian);

// ===================================================================
// Статичні властивості
// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic',
//   };

//   #name;
//   #email;
//   #role;

//   constructor(params) {
//     this.#name = params.name;
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const dorian = new User({
//   name: 'Dorian',
//   email: 'dorian.devua@gmail.com',
//   role: User.roles.admin,
// });

// console.log(dorian.role); // "admin"
// dorian.role = User.roles.editor;
// console.log(dorian.role); // "editor"
// console.log(dorian);

// ==============================================================
// Статичні методи
// Особливість статичних методів
// Під час їх виклику ключове слово this посилається на сам клас.
// Це означає, що статичний метод може отримати доступ до статичних
// властивостей класу, але не до властивостей екземпляра.
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     console.log('this User:', this);
//     return this.#takenEmails.includes(email); // return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;

//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com')); // false
// console.log(User.isEmailTaken('mango@mail.com')); // true

// ==============================================================
// Наслідування класів
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// ============================================================
// Конструктор дочірнього класу
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

// =========================================================
// Методи дочірнього класу
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts); // ['post-1', 'post-2']

/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   // 2. Функция вызывается в контексте созданного объекта,
//   //    то есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//   //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(Car.prototype);

// 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);

// myCar3.sayHi();

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });

// mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

// User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.';

// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
// };

// User.logInfo(mango);

// Object.keys()
// Object.value()

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
