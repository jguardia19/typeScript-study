function add(a: number, b: number){
    return a + b;
}

function log(menssage: string): void{
    console.log(menssage)
}

function logAndThrow(menssage: string): never{
    console.log(menssage);
    throw new Error(menssage);
}

function performJob(cb: (msg: string) => void){
    //...
    cb('Job done');
}

performJob(log);

type User = {
    name: string;
    age: number;
    greet: () => string;
}

let usuario: User = {
    name: "Max",
    age: 38,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

usuario.greet();