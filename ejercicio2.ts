function multiplicar (numero1: number, numero2: number): number{
    return numero1 * numero2;
}

//console.log(multiplicar(2, 2));

function saludoPersonalizado(nombre: string, saludo?: string): void{
    console.log(`${saludo ?? "Hola"},  ${nombre}`);
}

//saludoPersonalizado("Ana");
//saludoPersonalizado("Ana", "Buenos días");

interface Cliente  {
    nombre: string,
    edad: number,
    email: string
}

function mostrarCliente (cliente : Cliente): void{
    console.log(`Nombre: ${cliente.nombre}, Edad: ${cliente.edad}, Email: ${cliente.email}`);
}

let cliente1: Cliente = {
    nombre: "Jose Guardia",
    edad: 34,
    email: "jose.guardia@gmail.com"
}

mostrarCliente(cliente1);
