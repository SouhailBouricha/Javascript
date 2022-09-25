import myName from './myName';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');


    // Lodash, now imported by this script
    element.innerHTML = myName("Souhail");
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    console.log(Icon);
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());