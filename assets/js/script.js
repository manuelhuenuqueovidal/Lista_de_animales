//Selecciona el formulario del HTML.
let formulario = document.querySelector("form");

//Función que maneja el evento de agregar una mascota.
let agregarMascota = (event) => {
    event.preventDefault(); //Evita el comportamiento predeterminado de enviar el formulario.

    //Obtiene los datos ingresados en el formulario.
    let propietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;

    //Crea una instancia de Mascota según el tipo seleccionado.
    let mascota = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
    );
    //Muestra el resultado en la página.
    mostrarResultado(mascota);
    //Limpiar el formulario.
    limpiarFormulario();
     
};

//Función para limpiar el formulario después de agregar la mascota.
let limpiarFormulario = () => {
    document.getElementById("propietario").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("nombreMascota").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("enfermedad").value = "";
};


//Agrega un listener al evento submit del formulario.
formulario.addEventListener("submit", agregarMascota);

//Definición de la clase Propietario
class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this.nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `Propietario: ${this.nombrePropietario}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
    }

}

//Definición de la clase Animal que hereda de Propietario.
class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this.tipo = tipo;
    }
}

//Definición de la clase Mascota que hereda de Animal.
class Mascota extends Animal {
    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombrePropietario, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }
}

//Crea elementos de lista para mostrar los datos de la mascota.
let mostrarResultado = (mascota) => {
    let resultado = document.getElementById("resultado");
    let ul = resultado.querySelector("ul");
    let li = document.createElement("li");
    li.textContent = `Propietario: ${mascota.nombrePropietario}, nombre mascota: ${mascota.nombreMascota}, dirección: ${mascota.direccion}, teléfono: ${mascota.telefono}, tipo: ${mascota.tipo}, enfermedad: ${mascota.enfermedad}.`;
    ul.appendChild(li);
};
