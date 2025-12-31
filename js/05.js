//Objetos - Manipulación
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    profesion: 'Ingeniero',
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años. además soy ${this.profesion}`);
    }
};
//Esta sintaxis es para reescribir un valor de una propiedad
persona.profesion = 'Superhéroe'; // Modificar una propiedad
console.log(persona);
console.log(persona.saludar()); // Llamada al método saludar
console.table(persona);// Muestra el objeto en formato tabla
persona.ubicacion = 'Nueva York'; // Agregar una nueva propiedad
console.log(persona);
console.table(persona);
//Object.freeze(persona); // Congelar el objeto para evitar modificaciones
Object.seal(persona); // Sellar el objeto para evitar agregar o eliminar propiedades, pero permite modificar las existentes
persona.edad = 46; // Modificar una propiedad existente
delete persona.edad; // Eliminar una propiedad
console.log(persona);
console.table(persona);
console.log(`Hola, soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años. además soy ${persona.profesion}`);
//como puedo evitar que a un objeto se le agreguen nuevas propiedades?
Object.freeze(persona); // Congelar el objeto para evitar modificaciones
persona.nacionalidad = 'Estadounidense'; // Intentar agregar una nueva propiedad (no tendrá efecto)