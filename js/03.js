//Tipos de datos
/*
   Todo esto son tipos de datos en JavaScript 
   - Undefined
   - Números - Number 0, 1, 2, 3 
   - Cadenas de texto - String "Hola", "Mundo"
   - Booleanos - Boolean true, false
   - Objetos - Object { nombre: "Juan", edad: 30 }
   - Arreglos - Array [1, 2, 3, 4]
*/
//para saber el tipo de dato usamos typeof
let variable;
console.log(typeof variable); // undefined

//String o cadenas de texto
const nombre = "Jorge";
let apellido = 'López';
console.log(typeof nombre); // string
console.log(typeof apellido); // string

//Numbers o Números
const numero = 1000;
const numero2 = 12.5;
const numero3 = -200;
const numero4 = "20"; // Not a Number
const numero5 = NaN; // Not a Number
console.log(typeof numero); // number
console.log(typeof numero2); // number
console.log(typeof numero3); // number
console.log(typeof numero4); // string
console.log(typeof numero5); // number
console.log(numero4 + numero2); // Es un unión de string + number = string "2012.5"

//BigInt
const numero6 = BigInt(1234567890123456789012345678901234567890);
console.log(numero6);
console.log(typeof numero6); // bigint

//Booleanos
const booleano = true;
const booleano2 = false;
const booleano3 = "true"; // string
console.log(typeof booleano); // boolean
console.log(typeof booleano2); // boolean
console.log(typeof booleano3); // string

//Null
const varNull = null;
console.log(typeof varNull); // object (esto es un error de JavaScript)
console.log(varNull); // null
//Undefined
let varUndefined;
console.log(typeof varUndefined); // undefined
console.log(varUndefined); // undefined

//Symbol
const simbolo = Symbol("mi simbolo");
const simbolo2 = Symbol("mi simbolo");
console.log(typeof simbolo); // symbol
console.log(simbolo); // Symbol(mi simbolo)
console.log(simbolo === simbolo2); // false (si tienen el mismo valor no son iguales)