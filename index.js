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
console.log(mensaje('Hoola'))