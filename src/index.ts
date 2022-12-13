import './style.css';
import './components/app.ts';
import './components/view';
console.log('meow');
const testImg = document.createElement('img');
testImg.src = './assets/img/img2.jpg';
const bodyCont = document.querySelector('body') as HTMLElement;
bodyCont.append(testImg);
