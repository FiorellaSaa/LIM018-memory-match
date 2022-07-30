
import webdev from '../data/webdev/webdev.js' 


let clickImg=[]

export function shuffle(num){
  let num1 = [...num]
  //Recorre el array de atrás hacia adelante
  for(let i = num1.length-1; i>0; i--){
      //Escoge un índice aleatorio antes del elemento actual
      let a = Math.floor(Math.random() * (i + 1));
      //Intercambia [a,b] por [b,a]
      [num1[i],num1[a]] = [num1[a],num1[i]];
  }
  return num1;
}

export const dataDoble = (array1) => {
  let dataDoble = array1.concat(array1)
  return dataDoble
};

export const dataImagenes = () => {
  let dataImagenes = webdev.items
  return dataImagenes
};



const App = () => {
 
  let array1 = webdev.items //data
  let dobleArray= array1.concat(array1) //duplica la data
  let distribuirCartas = shuffle(dobleArray) //Aplica shuffle a la data

  for(let i=0; i<distribuirCartas.length; i++){

    //Crear un contenedor de imágenes
    let contenedorImagenes = document.createElement("div")
    contenedorImagenes.className ="contenedorImagenes"
    contenedorImagenes.id = distribuirCartas[i].id
    const root = document.getElementById('root')
    root.appendChild(contenedorImagenes)

    //Crear un FrontFace
    let frontFace = document.createElement('div')
    frontFace.className='frontFace'
    contenedorImagenes.appendChild(frontFace)

    //Crear imágenes
    let mostrarImagenes = document.createElement("img")
    mostrarImagenes.src = distribuirCartas[i].image
    mostrarImagenes.alt = distribuirCartas[i].id
    mostrarImagenes.style.backgroundColor= distribuirCartas[i].bgColor
    //contenedorImagenes.appendChild(estiloImagenes)
    frontFace.appendChild(mostrarImagenes)

    //Crear un backFace
    let backFace = document.createElement('div')
    backFace.className='backFace'
    contenedorImagenes.appendChild(backFace)
   
    //Crear imágenes del backFace
    let imgBackFace = document.createElement('img')
    //imgBackFace.style.backgroundImage = url()
    imgBackFace.setAttribute('src', '../data/images.png')
    backFace.appendChild(imgBackFace)

   
    const flip = function(e){
   
      if(clickImg.length < 2){
        contenedorImagenes.classList.add('flip')
        clickImg.push(e.currentTarget)
        //console.log(clickImg)
        }
        if(clickImg.length === 2){
          if(clickImg[0].getAttribute('id') === clickImg[1].getAttribute('id')){
            //console.log('Hiciste Match')
            clickImg = []
          }
          else if(clickImg[0].getAttribute('id') !== clickImg[1].getAttribute('id')){
            //console.log('No hiciste Match')

            setTimeout( ()=>{
              clickImg[0].classList.remove('flip')
              clickImg[1].classList.remove('flip')
              clickImg = []
              },
            500);
          } 
        else{
          return null
          }
      }
      modalGanaste();
    }
    contenedorImagenes.addEventListener('click', flip)
    //window.addEventListener('hashchange', () => console.log(window.location.hash))
  }

//let btnInicio = document.getElementById('btnInicio');
let primeraPantalla = document.getElementById('primeraPantalla');
let segundaPantalla = document.getElementById('segundaPantalla');

document.getElementById('btnInicio').addEventListener('click', () =>{
  let ingresarNombre = document.getElementById('ingresarNombre').value;
  let mostrarNombre = document.getElementById('mostrarNombre');
 
    if(ingresarNombre !== ''){
      mostrarNombre.innerHTML = ` Hola ${ingresarNombre[0].toUpperCase()}${ingresarNombre.substring(1)}!`
      primeraPantalla.style.display = 'none';
      segundaPantalla.style.display = 'block';
    }else{
      alert('Ingresa tu nombre');
    }
});

let modalBtnPlay = document.getElementById('modalBtnPlay');
let btnPlay = document.getElementById('btnPlay');

  btnPlay.addEventListener('click', () =>{
    modalBtnPlay.style.display = 'none';
    segundaPantalla.style.display = 'block';
  //modalBtnPlay.classList.remove('show');
});

let btnModalFinal = document.getElementById('btnModalFinal');

const modalGanaste = () => {
  let totalMatch = document.getElementsByClassName('flip');
  if(totalMatch.length === 20){
    document.getElementById('containerModalFinal').style.display = 'block';
  }else{
    return null
  }
};

  
  btnModalFinal.addEventListener('click', () =>{  
    document.getElementById('containerModalFinal').style.display = 'none';
    segundaPantalla.style.display = 'none';
    primeraPantalla.style.display = 'block';
  location.reload();
});

  const el = document.createElement('div');
  el.className = 'App';
  //el.textContent = 'Hola mundo!';

  return el;
};

export default App;