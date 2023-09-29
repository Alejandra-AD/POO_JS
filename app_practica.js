console.log("funcionando");
const formulario = document.getElementById("formulario");
const cardEstudiante = document.getElementById("cards-estudiantes");
const cardProfesores = document.getElementById("cards-profesores");
const templateEstudiante = document.getElementById("templateEstudiante").content;
const templateProfesores = document.getElementById("templateProfesor").content;
const estudiantes = [];
const profesores = [];



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = new FormData(formulario); //a form data se le pasa el formulario
    // console.log(datos);

    // console.log([...datos.values()]); //destructuring

    const [nombre, correo, opcion] = [...datos.values()];
    console.log(nombre, correo, opcion);


    // console.log(estudiante);
    if (opcion === "estudiante") {
        const estudiante = new Estudiante(nombre, correo);
        estudiantes.push(estudiante);
        // console.log(estudiantes);
        Persona.pintarPersona(estudiantes, opcion);
    }

    if (opcion === "profesor") {
        const profesor = new Profesor(nombre, correo);
        profesores.push(profesor);
        Persona.pintarPersona(profesores, opcion);
    }



});

class Persona {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    static pintarPersona(personas, tipo) {

        if (tipo === "estudiante") {

            cardEstudiante.textContent = null;
            const fragment = document.createDocumentFragment();

            personas.forEach(item => {

                fragment.appendChild(item.agregarNuevoEstudiante());

            });

            cardEstudiante.appendChild(fragment); // le pasamos todos los estudiantes agregados


        }

        if (tipo === "profesor") {
            cardProfesores.textContent = null;

            const fragment = document.createDocumentFragment();
            personas.forEach(item => {

                fragment.appendChild(item.agregarNuevoProfesor());

            });

            cardProfesores.appendChild(fragment);

        }


    }
}

class Estudiante extends Persona {
    #estado = true;

    set setEstado(estado) {
        this.#estado = estado;
    }

    get getEstado() {
        return this.#estado;
    }

    agregarNuevoEstudiante() {

        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector(".d-flex").textContent = this.nombre;
        clone.querySelector(".correo-estudiante").textContent = this.correo;

        if(this.#estado){

            clone.querySelector(".bagde").className = "badge bg-success";

        } else{
            clone.querySelector (".badge").className = "badge bg-danger";

        }


        return clone;


    }

}

class Profesor extends Persona {



    agregarNuevoProfesor() {

        const clone = templateProfesores.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector(".correo-profesor").textContent = this.correo;
        return clone;

    }




}

//solo llegue mostrar el nombre de estudiante