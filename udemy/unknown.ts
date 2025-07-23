function process(val: unknown){
    if(
        typeof val === "object" &&
        !!val &&
        'log' in val &&
        typeof val.log === "function"
    ){
        val.log();
    }
}

//optional 
function generateError(msg?: string){
    throw new Error(msg);
}

generateError();

type Usuario = {
    name: string;
    age: number;
    role?: 'admin' | 'user';
};