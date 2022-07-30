import App from './App.js';
import {shuffle, dataDoble, dataImagenes} from './App.js';
import webdev from '../data/webdev/webdev.js';

//import {items} from '../data/webdev/webdev.js'

document.body.innerHTML= `<button type='submit' id='btnInicio'></button>
<div id='root'></div>
<div id="containerModalFinal" class="containerModalFinal">
<button id="btnModalFinal"></button>
</div>
 <button type='submit' id='btnPlay'></button>`


describe('App', () => {
  it('should render without crashing', () => {
    // TODO 
    // const webdev = {}
    // const el = App(webdev);
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

});

describe('shuffle', () => {
  it('Debería ser una función', () => {
    expect(typeof shuffle).toBe('function');
  });
  it('No debería modificar la longitud del array',()=>{
    const data = [1, 2, 3, 4]
    expect(shuffle(data)).toHaveLength(4);
  });
  it('Debería devolver el elemento con posiciones diferentes',()=>{
    const data = [1, 2, 3, 4]
    const dataRandom = shuffle(data)
    expect(data).not.toEqual(dataRandom);
  });
  });

  describe('dataDoble', ()=>{
    it('Debería ser una función', () => {
      expect(typeof dataDoble).toBe('function');
    });
    it('Debería duplicar la data',()=>{
      let data = dataDoble([1, 2, 3, 4])
      expect(data).toHaveLength(8);
    });
  });

  describe('dataImagenes', () => {
    it('Debería ser una función', () => {
      expect(typeof dataImagenes).toBe('function');
    });
    it('Debería devolver la longitud de dataImagenes',() =>{
      let dataImg = dataImagenes()
      expect(dataImg).toHaveLength(10);
    });
    it('El item "image" debería estar dentro del primer objeto del array',() =>{
      let dataImg  = webdev.items[0]
      expect(dataImg ).toHaveProperty('image');
    });
  });

  /*describe('webdev', ()=>{
    it('El item image debería estar dentro del array',()=>{
      expect(webdev.items).toHaveProperty('image');
    });
  });*/
  /*describe('dataImagenes', () =>{
  const webdev = [
  {"bgColor": "#F7DF1E", "id": "js", "image": "https://simpleicons.org/icons/javascript.svg"}, 
  {"bgColor": "#F05032", "id": "git", "image": "https://simpleicons.org/icons/git.svg"}, 
  {"bgColor": "#1572B6", "id": "css", "image": "https://simpleicons.org/icons/css3.svg"}, 
  {"bgColor": "#E34F26", "id": "html", "image": "https://simpleicons.org/icons/html5.svg"}, 
  {"bgColor": "#339933", "id": "node", "image": "https://simpleicons.org/icons/nodedotjs.svg"}, 
  {"bgColor": "#CB3837", "id": "npm", "image": "https://simpleicons.org/icons/npm.svg"}, 
  {"bgColor": "#2C8EBB", "id": "yarn", "image": "https://simpleicons.org/icons/yarn.svg"}, 
  {"bgColor": "#61DAFB", "id": "react", "image": "https://simpleicons.org/icons/react.svg"}, 
  {"bgColor": "#DD0031", "id": "angular", "image": "https://simpleicons.org/icons/angular.svg"}, 
  {"bgColor": "#4FC08D", "id": "vue", "image": "https://simpleicons.org/icons/vuedotjs.svg"},
];*/
