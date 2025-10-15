//Objetos - Destructuring de dos o más objetos
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    profesion: 'Ingeniero',
    direccion: {
        ciudad: 'Malibu',
        zip: 10880, lat: 34.0522, lng: 118.2437
    }
};
console.log(persona);
console.table(persona);
const persona2 = {
    nombre: 'Steve',
    apellido: 'Rogers',
    edad: 35,
    profesion: 'Capitán',
    direccion: {
        ciudad: 'Manhattan',
        zip: 10001, lat: 40.7128, lng: 74.0060
    }
};
console.log(persona2);
console.table(persona2);
const { nombre } = persona; // Destructuring de una propiedad
//const { nombre } = persona2; // Destructuring de una propiedad con la misma variable genera error
//Solución: renombrar la variable al hacer destructuring
const { nombre: nombre2 } = persona2; // Destructuring de una propiedad con renombramiento
console.log(nombre);
console.log(nombre2);
//es util para cuando tenemos funciones que reciben objetos como argumentos.
const { profesion, direccion: { ciudad } } = persona; // Destructuring anidado a un objeto dentro de otro objeto
console.log(profesion);
console.log(ciudad);
const { profesion: profesion2, direccion: { ciudad: ciudad2 } } = persona2; //  Renombramiento y destructuring anidado 
console.log(profesion2);
console.log(ciudad2);