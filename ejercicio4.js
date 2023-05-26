


//36

const btnMenosUno = document.getElementById("menosUno")
const btnUno = document.getElementById("uno")
const btnMenosCinco = document.getElementById('menosCinco')
const btnCinco = document.getElementById('cinco')
const btnMenosDiez = document.getElementById('menosDiez')
const btnDiez = document.getElementById('diez')
const resultado = document.getElementById('resultado')
let valorInicial = 0

const btn=document.querySelector("button")

console.log(valorInicial )

const restaUno=() =>{
  valorInicial += -1
  resultado.innerHTML =   valorInicial  
}

const sumaUno=() =>{
  valorInicial += 1
  resultado.innerHTML =   valorInicial  
}


const restaCinco=() =>{  
  valorInicial += -5
  resultado.innerHTML =   valorInicial
}


const sumaCinco=() =>{  
  valorInicial += 5
  resultado.innerHTML =   valorInicial
}


const restaDiez=() =>{  
  valorInicial += -10
  resultado.innerHTML =   valorInicial
}


const sumaDiez=() =>{  
  valorInicial += 10
  resultado.innerHTML = valorInicial
}


btnMenosUno.addEventListener('click',restaUno)
btnUno.addEventListener('click',sumaUno)
btnMenosCinco.addEventListener('click',restaCinco)
btnCinco.addEventListener('click',sumaCinco)
btnMenosDiez.addEventListener('click',restaDiez)
btnDiez.addEventListener('click',sumaDiez)


//Ejercicio 37
const btnElefante = document.getElementById('elefante')
const btnAnillo = document.getElementById('anillo')
const btnHormiga = document.getElementById('hormiga')
const rtaAdiv = document.getElementById('rtaAdiv')

const rtaElefante = () =>{
  console.log('entra')
  rtaAdiv.innerHTML = `Respuesta equivocada!`
  btnElefante.style.backgroundColor = 'red'
  btnAnillo.style.background= 'green'
  btnHormiga.style.backgroundColor='red'  
}


const rtaAnillo= () =>{
  console.log('entra')
  rtaAdiv.innerHTML = `Respuesta Correcta!`
  btnElefante.style.backgroundColor = 'gray'
  btnAnillo.style.background= 'green'
  btnHormiga.style.backgroundColor='gray'  
}


const rtaHormiga = () =>{
  console.log('entra')
  rtaAdiv.innerHTML = `Respuesta equivocada!`
  btnElefante.style.backgroundColor = 'red'
  btnAnillo.style.background= 'green'
  btnHormiga.style.backgroundColor='red'  
}

btnElefante.addEventListener('click',rtaElefante)
btnAnillo.addEventListener('click',rtaAnillo)
btnHormiga.addEventListener('click',rtaHormiga)

//ejercicio 38

const imgT = document.querySelector('img')
const img1 = document.getElementById('imagenP')
const img2 = document.getElementById('imagen2')
const img3 = document.getElementById('imagen3')
const img4 = document.getElementById('imagen4')
const img5 = document.getElementById('imagen5')


const verImg1 = () =>{
  console.log('entra')
}

//img1.addEventListener('click',verImg1)
//img2.addEventListener('click',verImg1)
//cimg1.addEventListener('click',verImg1)

//Ejercicio 39

const colBody = document.querySelector('body')

const darcolorBody = (e) => {
  
  if (e.code === 'Space' ){

    const colorR = Math.floor( Math.random()*255)
    const colorG = Math.floor( Math.random()*255)
    const colorB = Math.floor( Math.random()*255)

    colBody.style.backgroundColor = `RGB(${colorR},${colorG},${colorB})`
    
  
    }
  
}

colBody.addEventListener ('keypress', darcolorBody) 