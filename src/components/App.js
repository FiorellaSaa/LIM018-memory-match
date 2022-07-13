//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';

// importo la data de webdev
import webdev from '../data/webdev/webdev.js' 


  //console.log(mostrarData);
 


//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//const App = () => {
// fetch('./data/webdev/weddev.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//}


/*let array2 = array1.forEach(
  alert("Hola")
);*/
//console.log(array2)

//Craer imagen de primera pantalla

//let imgPrincipal = document.createElement('img')
//imgPrincipal.setAttribute('src', '../data/mm.jpg')
//primeraPantalla.appendChild(imgPrincipal)


//let mostrarData = document.getElementById('root')
//mostrarData.innerHTML = webdev.items
//console.log(webdev.items[0].image)

//document.getElementById("image").src = webdev.items[0].image
let clickImg=[]

const App = () => {


  //let crearEtiquetaImg = document.createElement("img")
  //document.getElementById('root').appendChild(crearEtiquetaImg)
  //crearEtiquetaImg.src = webdev.items[0].image
  let array1 = webdev.items
  let dobleArray= array1.concat(array1)
  let distribuirCartas = shuffle(dobleArray)

  console.log(distribuirCartas)

  
  
  for(let i=0; i<distribuirCartas.length; i++){

    //Crear un contenedor de imágenes
    let contenedorImagenes=document.createElement("div")
    contenedorImagenes.className="contenedorImagenes"
    contenedorImagenes.id = distribuirCartas[i].id
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
    //console.log(array1[i].image)
    
    //console.log(mostrarImagenes)

    //Crear imágenes del backFace
    let imgBackFace = document.createElement('img')
    //imgBackFace.style.backgroundImage = url()
    imgBackFace.setAttribute('src', '../data/images.png')
    backFace.appendChild(imgBackFace)

    contenedorImagenes.addEventListener('click', flip)
    function flip(e){
      contenedorImagenes.classList.add('flip')
      //console.log('Hola');
      
      if(clickImg.length < 2){
        clickImg.push(e.currentTarget)
        console.log(clickImg)
        
      }
        if(clickImg.length === 2){
          if(clickImg[0].getAttribute('id') === clickImg[1].getAttribute('id')){
            console.log('Hiciste Match')

            clickImg = []
          }
          else if(clickImg[0].getAttribute('id') !== clickImg[1].getAttribute('id')){
            console.log('No hiciste Match')

            const timeFlipMatchImg =  setTimeout(flipMatchImg, 500);

            function flipMatchImg(){
              clickImg[0].classList.remove('flip')
              clickImg[1].classList.remove('flip')
              clickImg = []
            }
          }
          
      }
    }

    //window.addEventListener('hashchange', () => console.log(window.location.hash))
    
    //crear etiquetas para duplicar las cartas
    /*let dobleImagenes = document.createElement("img")
    document.getElementById('root').appendChild(dobleImagenes)
    
    dobleImagenes.src = mostrarImagenes.src.slice()
    console.log(dobleImagenes)*/
   
  }
  //et num1 = ["a","b","c"]
  //let num = [1,2,3,4,5]
    function shuffle(num){
      for(let i = num.length-1; i>0; i--){
        let a = Math.floor(Math.random() * (i + 1));
        [num[i],num[a]] = [num[a],num[i]];
        //shuffle(mostrarImagenes);
      }
      //shuffle(mostrarImagenes);
      //console.log(mostrarImagenes);
      return num;
    }
      //console.log(shuffle(dobleArray))
    //console.log(shuffle(num1))

  const el = document.createElement('div');
  el.className = 'App';
  //el.textContent = 'Hola mundo!';

  return el;
     
  
  

    
  /*dobleImagenes.src = mostrarImagenes.map(function(x){
    return (x + x);
 });*/
 
  //var dobleImagenes = mostrarImagenes.slice();

 //var dobleData = [...mostrarData];
 //var dobleData = Array.from(mostrarData);
 //console.log(dobleData);



  /*const divCartas = document.createElement('div')

  divCartas.className = 'divCartas'
  el.appendChild(divCartas)

  let webdevArray = webdev.items
  let dobleItems = webdevArray.concat(webdevArray)

//console.log(dobleItems)

  dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image
    //console.log(imagenesCartas)
    let divIconos = document.createElement('img')
    divIconos.className = 'estiloCartas'

    divIconos.src = imagenesCartas

    divCartas.appendChild(divIconos)
  //console.log(imagenesCartas)
  
  });

  //---
  //const divCartas = document.createElement('div')

  //divCartas.className = 'divCartas'
  //el.appendChild(divCartas)

  /*let items = webdev.items
  let dobleItems = items.slice()
  //console.log(dobleItems)
  for (let i=0; i<items.length; i++) {
    let imagen = items[i].image
    let dobleImagen = dobleItems[i].image
    //console.log(typeof(imagen))
    let imgCartas = document.createElement('img')
    let imgDoble = document.createElement('img')
    imgCartas.className = 'estiloCartas'
    imgDoble.className = 'estiloCartas'
    
    imgCartas.src = imagen // accedemos a la url de la etiqueta img
    imgDoble.src = dobleImagen

    divCartas.appendChild(imgCartas)
    divCartas.appendChild(imgDoble)
  }*/
  //return el;
}; 

export default App;