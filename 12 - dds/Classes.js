class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance;    // undefined
  p2.displayName; // undefined
  p2.distance;    // undefined
  
  console.log(Point.displayName);      // "Point"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755

  var moment = require('moment');
console.log("Hello from JavaScript!");  
console.log(moment().startOf('day').fromNow());
var name = "Bob", time = "today";  
console.log(`Hello ${name}, how are you ${time}?`);

import moment from 'moment';
console.log("Hello from JavaScript!");  
console.log(moment().startOf('day').fromNow());
var name = "Bob", time = "today";  
console.log(`Hello ${name}, how are you ${time}?`);
const functionOne = () => console.log('FUNCTION ONE!');

export { functionOne };
import { functionOne } from './functionOne';

functionOne(); // this should work as expected!
const myName = (name) => 'Hi! My name is ' + name;

export default myName;
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  return element;
}

document.body.appendChild(component());

const functionOnne = () => console.log('FUNCTION ONE!');

export { functionOne };
// another JS file
import { functionnOne } from './functionOne';

functionOne(); // this should work as expected!
const myNadme = (name) => 'Hi! My name is ' + name;

// export default myNadme;
import myNasme from './myName';

function component() {
  const element = document.createElement('div');

  // use your function! 
  element.textContent = myName('Cody');
  return element;
}




