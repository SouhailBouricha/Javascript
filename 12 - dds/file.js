const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
//   const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'

  const Person = function(name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
  };
  
  const jeff = new Person('jeff', 27);

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food});
 // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }

let a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a); // ???????
const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };
  
  const taco = FactoryFunction('taco');
  
  printString(); // ERROR!!
  capitalizeString(); // ERROR!!
  taco.capitalizeString(); // ERROR!!
  taco.printString(); // this prints "----TACO----"

  const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
  const counter = counterCreator();
  
  counter(); // 0
  counter(); // 1
  counter(); // 2
  counter(); // 3

  const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName  = () => name;
    const die = () => {
      // uh oh
    };
    const damage = x => {
      health -= x;
      if (health <= 0) {
        die();
      }
    };
    const attack = enemy => {
      if (level < enemy.getLevel()) {
        damage(1);
        console.log(`${enemy.getName()} has damaged ${name}`);
      }
      if (level >= enemy.getLevel()) {
        enemy.damage(1);
        console.log(`${name} has damaged ${enemy.getName()}`);
      }
    };
    return {attack, damage, getLevel, getName};
  };
  
  const jimmie = Player('jim', 10);
  const badGuy = Player('jeff', 5);
  jimmie.attack(badGuy);

//   const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`);
//     return {sayName};
//   }
  
  const Nerd = (name) => {
    // simply create a person and pull out the sayName function with destructuring assignment syntax!
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return {sayName, doSomethingNerdy};
  }
  
//   const jeff = Nerd('jeff');
  
  jeff.sayName(); //my name is jeff
  jeff.doSomethingNerdy(); // nerd stuff
  
const gh = (name) => {
    const prototype = Person(name);
    const doSomethingNerdy = () => console.log('nerd stuff');
    return Object.assign({}, prototype, {doSomethingNerdy});
}