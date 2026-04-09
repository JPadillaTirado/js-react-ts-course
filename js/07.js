const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

const carrito = {
    cantidad: 1,
    producto
}
//Sólo colocando los 3 puntos se puede copiar todo el objeto, pero si se coloca algo antes o después, se pueden modificar los valores del objeto original, por ejemplo:
//const carrito2 = {
//    cantidad: 1,
//    ...producto,
//    precio: 500
//} -> Esto modifica el precio del producto original, pero si se coloca después, no se modifica el producto original, Esto es el spread operator, que permite copiar un objeto sin modificar el original, pero si se coloca algo antes o después, se pueden modificar los valores del objeto original, por ejemplo:

const nuevoObjeto = {
    ...producto,
    ...cliente,
    nombreProducto: producto.nombre
}
console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign( producto, cliente)
console.log(nuevoObjeto2)