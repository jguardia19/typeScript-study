"use strict";
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
//console.log(multiplicar(2, 2));
function saludoPersonalizado(nombre, saludo) {
    console.log(`${saludo !== null && saludo !== void 0 ? saludo : "Hola"},  ${nombre}`);
}
function mostrarCliente(cliente) {
    console.log(`Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Email: ${cliente.email}`);
}
let cliente1 = {
    nombre: "Jose Guardia",
    edad: 34,
    email: "jose.guardia@gmail.com"
};
mostrarCliente(cliente1);
