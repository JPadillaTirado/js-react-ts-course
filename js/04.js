//Objetos
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    profesion: 'Ingeniero',
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
};
persona.saludar(); // Llamada al método saludar
console.log(persona);  // Muestra todo el objeto
console.table(persona);// Muestra el objeto en formato tabla
console.log(persona.nombre);// Acceso a una propiedad
console.log(persona['apellido']); // Acceso a una propiedad
console.log(persona.ubicacion); // Acceso a una propiedad que no existe

// Destrcturing -> Extraer propiedades de un objeto
const { nombre, edad } = persona; // Extrae las propiedades nombre y edad, esta es la forma moderna
console.log(nombre, edad);
//Esto hace lo mismo que esto:
const nombre2 = persona.nombre;
const edad2 = persona.edad;
console.log(nombre2, edad2);

// Object literal enhancements
const pais = 'Argentina';
const ciudad = 'Buenos Aires';
const ubicacion = {
    pais: pais,
    ciudad: ciudad
};
console.log(ubicacion);
// Esto hace lo mismo que esto:
const ubicacion2 = { pais, ciudad
};