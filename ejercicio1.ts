let ciudad: string = "Madrid"
let temperatura: number = 25
let esDeDia: boolean = true

// Arrays
let paises: string[] = ["España", "Francia", "Alemania"]
// Tuplas
let producto: [number, string, boolean] = [15487, "Lampara SUN 05", true]


//types
type Direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: number
}

let miDireccion: Direccion = {
    calle: "Calle articulo 123",
    ciudad: "Mexico DF",
    codigoPostal: 6050
}

type Ubicacion = Direccion  &{
    pais: string
}

let ubicacion : Ubicacion = {
    calle: "Calle articulo 123",
    ciudad: "Mexico DF",
    codigoPostal: 6050,
    pais: "Mexico"
}

interface vehiculo {
    marca: string,
    modelo: string,
    anio: number
}

let miCarro: vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
}

interface VehiculoElectrico extends vehiculo{
    bateriaKWh:number
}

let tesla: VehiculoElectrico = {
    marca: "Tesla",
    modelo: "Model 3",
    anio: 2021,
    bateriaKWh: 100
}
