// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// =================================================================
// const customer = {
//   username: 'Jacob',
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

// ===================================================================
// Перебір власних властивостей

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

// ==================================================================
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

// ===================================================================
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }

// ===================================================================
// Ланцюжки прототипів
// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// ===================================================================
// const objB = {
//   b: 'objB prop',
// };

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);

/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);
