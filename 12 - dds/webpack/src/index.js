import myName from './myName';
import './style.css';

function component() {
    const element = document.createElement('div');


    // Lodash, now imported by this script
    element.innerHTML = myName("Souhail");
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());