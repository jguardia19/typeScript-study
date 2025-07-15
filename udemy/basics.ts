let username: string;
let userAge = 38;

username = "Max";
//userAge = '34';

function add(a:number, b = 5){
    return a + b;
}

add(10);
//add("10")
add(10, 20);
//add(10, "20");