const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'