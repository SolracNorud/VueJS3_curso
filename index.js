/**
 * var vs let vs const 
 * 
 * var => Te permite declarar dos veces la misma variable (con el mismo nombre)
 * let => No te permite declarar dos veces la misma variable
 * const => Es casi lo mismo que 'let', pero es una variable que no varía xD
 * 
 * 
 */

var example = 20
var example = 25

let exam = 65 
// let exam = 15 esto genera error

const gravity = 9.8
// gravity = 10 esto genera error

if(true){
    let example = 30 // Esto no genera error porque solo existe dento del 'if'
}

/**
 * Funciones
 * 
 * Se puede hacer como 'function' o como 'const = funcion de flecha' 
 * 
 * La funcion de flecha ahorra codigo
 */

function potencia2 (num){
    console.log(num*num)
}
//potencia2(10)

const potencias = (num, exp) =>{
    console.log(Math.pow(num,exp))
}
//potencias(2,4)

const potenciass = (num,exp) => Math.pow(num,exp)
//console.log(potenciass(2,3))

const saludo = nombre => 'Hola soy '+ nombre
//console.log(saludo('Humberto'))

//parametros predefinidos
const saludos = (nombre = 'desconocido') => 'Hola soy '+ nombre
//console.log(saludos())

/**
 * Template String
 */

const mensaje = send => `El mensaje es: ${send}`
//console.log(mensaje('Hoola'))

/**
 * Objetos
 */

const mascota = {
    nombre: 'Churrumais',
    edad: 5,
    vivo: true,
    caracteristicas: ['Gordito', '6 Kilos', 'Naranja']
}

const {edad} = mascota
//console.log(edad)
//console.log(mascota.caracteristicas)

const web = {
    nombre: 'oxxo',
    links: {
        enlace: 'www.oxxo.com.mx'
    },
    redesSociales:{
        youtube: {
            enlace: 'youtube.com/oxxo',
            nombre: 'OXXOYT'
        }
    }
}

const {nombre} = web.redesSociales.youtube
//console.log(nombre)

/**
 * fetch
 */

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        data.results.forEach(element => {
            //console.log(element)
        });
    })
    .catch(error => console.log(error))

/**
 * async await
 */

const obtenerPokemon = async() => {
    try{
        const res = await fetch ('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        console.log(data.results)
    } catch(error){
        console.log(error)
    }
}

obtenerPokemon()