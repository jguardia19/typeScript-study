//let hobbies = ["cooking", "sports"];
let sports: number[] = [];

sports.push(10);

//let users: ( string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
users = [5,1];
users = ['Max', 'Ana'];

let possibleResults: [number, number];

possibleResults = [1, -2];
// no possibleResults = [1, -2, 3];

let user:  {
    name:string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: "Max",
    age: 38,
    hobbies: ["cooking", "sports"],
    role: {
        description: "Admin",
        id: 1
    }
}

let val: {} = false;
// let val: {} = null;

let data: Record<string, string | number>;

data = {
    entry1: 1,
    edad: "some string"
}