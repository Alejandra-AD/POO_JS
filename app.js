console.log("funcionando"); 

//funcion contructora = plantilla = class

function Persona(nombre){
    this.nombre = nombre;

    this.saludar = function(){
        return `${this.nombre} dice hola 👋`;
    }

}

const juanito = new Persona ("Juanito");
console.log(juanito);
console.log(juanito.saludar());

const pedrito = new Persona ("Pedrito");
console.log(pedrito);
console.log(pedrito.saludar());