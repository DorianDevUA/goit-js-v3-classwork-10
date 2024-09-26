class User {
  static counter = 0;
  static addUser() {
    // User.counter +=1;
    this.counter += 1;
    console.log(`Number of users ${this.counter}`);
  }
  #location;

  constructor({ name, email, age = 18, location = 'World', password } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;
    this.password = password;

    User.addUser();
  }

  sayHello() {
    console.log(this.name);
    this.#getEmail();
  }

  #getEmail() {
    console.log(this.email);
  }

  get locale() {
    return this.#location;
  }

  set locale(city) {
    const value = prompt('Enter password');
    if (value === this.password) {
      this.#location = city;
      console.log(this.#location);
    } else {
      console.log('Хацкер ? 😱');
    }
  }
}

class Avatar extends User {
  constructor({ damage, ...args }) {
    super(args);
    this.damage = damage;
  }

  attack() {
    console.log(`Attack with damage ${this.damage}`);
  }
}

class Zombi extends User {
  constructor({ poison, ...props }) {
    super(props);
    this.poison = poison;
  }

  toBite() {
    console.log(`Bite with ${this.poison}`);
  }
}

const test = new Avatar({
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
  password: 'qwerty111',
  damage: 700,
});

const test1 = new Zombi({
  name: 'User B',
  email: 'gmail@gmail.com',
  age: 99,
  poison: 500,
});

const test2 = new User({
  name: 'User C',
  email: 'userc@mail.com',
  age: 92,
});

console.log(test);
// Avatar {name: "User A", email: "test@gmail.com", age: 18, #location: "Lviv", password: "qwerty111", damage: 700}
console.log(test1);
// Zombi {name: "User B", email: "gmail@gmail.com", age: 99, #location: "World", password: undefined, poison: 500}
console.log(test2);
// User {name: "User C", email: "userc@mail.com", age: 92, password: undefined, #location: "World"}

test.sayHello(); // User A

console.log(test.locale); // Lviv
test.locale = 'Dnipro';
// В залежності від умови: Dnipro | Хацкер ? 😱
