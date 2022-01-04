class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`${this.name}在说话`);
  }
}

const per = new Person('旺财', 5);
console.log(per);
per.say();

class Dog extends Person {
  say() {
    console.log(`${this.name}在说话,我今年${this.age}岁了!`);
  }
}
const dog = new Dog('来福', 2);
console.log(dog);
dog.say();

class Cat {
  name: string = '小花';
  static age: number = 18;
  sayHello() {
    console.log('Hello');
  }
  static sayBay() {
    console.log('Bay Bay！');
  }
}

const cat = new Cat();
console.log(cat.name);
console.log(Cat.name);