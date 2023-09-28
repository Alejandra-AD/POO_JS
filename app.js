// console.log("funcionando"); 

// //funcion contructora = plantilla = class

// function Persona(nombre){
//     this.nombre = nombre;

//     this.saludar = function(){
//         return `${this.nombre} dice hola 👋`;
//     }
//     // this.saludarIngles = function(){
//     //     return `${this.nombre} says hi 👋`;
//     // }

// }
// // crear un prototipo para no pasar ciertos métodos a todas las instancias que creemos

// Persona.prototype.saludarIngles = function(){
//     return `${this.nombre} says hi 👋`;
// }

// const juanito = new Persona ("Juanito");
// console.log(juanito);
// console.log(juanito.saludar());

// const pedrito = new Persona ("Pedrito");
// console.log(pedrito);
// console.log(pedrito.saludar());

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        return `${this.nombre} dice hola!`;
    }

    static despedirse(nombre){
        return `${nombre} dice adios`;
    }

}

console.log(Persona.despedirse("Cappu"));

const juanito = new Persona("Juanito");
console.log(juanito);

//clase hijo

class Estudiante extends Persona {
    constructor(nombre,edad,notas = []){
        super(nombre,edad);
        this.notas = notas;

    }

    set setNotas(nota){
        this.notas.push(nota);
    }

    get getNotas(){
        return this.notas;
    }


}

const gigi = new Estudiante("Gigi");

gigi.setNotas = 5;
gigi.setNotas = 6;
gigi.setNotas = 7;

console.log(gigi.getNotas);