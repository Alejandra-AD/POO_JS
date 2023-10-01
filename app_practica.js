console.log("funcionando");
const formulario = document.getElementById("formulario");
const cardEstudiante = document.getElementById("cards-estudiantes");
const cardProfesores = document.getElementById("cards-profesores");
const templateEstudiante = document.getElementById("templateEstudiante").content;
const templateProfesores = document.getElementById("templateProfesor").content;
const alert = document.querySelector("alert");
const estudiantes = [];
const profesores = [];


document.addEventListener("click", event => {
    console.log(event.target.dataset.uid);
    if (event.target.dataset.uid){
        if (event.target.matches(".btn-success")){

            estudiantes.map(item =>{

                if (item.uid === event.target.dataset.uid){
                    item.setEstado = true;
                }

                return item;
            });

        }

        if (event.target.matches(".btn-danger")){
            estudiantes.map(item =>{
                if (item.uid === event.target.dataset.uid){
                    item.setEstado = false;
                }
                return item;
            });

        }


        Persona.pintarPersona(estudiantes,"estudiante");
    }




});



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = new FormData(formulario); //a form data se le pasa el formulario
    // console.log(datos);

    // console.log([...datos.values()]); //destructuring

    // alert.classList.add("d-none");


    const [nombre, correo, opcion,uid] = [...datos.values()];
    console.log(nombre, correo, opcion);

    //alert 

    // if(!nombre.trim() || !correo.trim() || !opcion.trim()){
    //     console.log("faltan datos");
    //     alert.classList.remove("d-none");
        
    //     return;
    // }


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
        this.uid = `${Date.now()}`;
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

            // clone.querySelector(".bagde").className = "badge bg-success";
            clone.querySelector(".btn-success").disabled = true;
            clone.querySelector(".btn-danger").disabled = false;
            console.log(this.#estado);

        } else{
            clone.querySelector (".badge").className = "badge bg-danger";
            // clone.querySelector (".btn .btn-danger").textContent = "Reprobado";
            clone.querySelector (".btn-danger").disabled = true;
            clone.querySelector (".btn-success").disabled = false;

        }
        clone.querySelector(".badge").textContent = this.#estado ? "Aprobado" : "Reprobado";
        clone.querySelector(".btn-success").dataset.uid = this.uid;
        clone.querySelector(".btn-danger").dataset.uid = this.uid;

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

