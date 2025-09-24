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
delete persona.edad; // Eliminar una propiedad
console.log(persona);
console.table(persona);