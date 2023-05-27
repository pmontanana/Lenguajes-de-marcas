function validarDatos() {
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellidos").value;
    let edad = parseInt(document.getElementById("Edad").value);
    let curso = document.getElementById("Curso").value;
    let modulos = document.getElementsByName("Modulos");


    if (nombre == "") {
        alert("Escribe un nombre");
        return;
    }
    if (apellido == "") {
        alert("Escribe un apellido");
        return;
    }
    if (edad < 15 || isNaN(edad)) {
        alert("Edad debe ser mayor a 15 años");
        return;
    }
    if (curso == "Default") {
        alert("Debes elegir un curso");
        return;
    }
    if (modulos == undefined) {
        alert("Debes elegir al menos un módulo");
        return;
    }

    alert("Todos los datos estan correctos")

}

function generarResumen() {
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellidos").value;
    let edad = parseInt(document.getElementById("Edad").value);
    let curso = document.getElementById("Curso").value;
    let turno = document.getElementById("Turno").value;
    let modulos = document.getElementsByName("Modulos");
    let values = [];
    let ciclo;
    let precio;
    let nModulos = 0;

    switch (curso) {
        case "1ºSMR":
        case "2ºSMR":
            ciclo = "Sistemas MicroInformaticos y Redes";
            precio = 10;
            break;
        case "1ºDAM":
        case "2ºDAM":
            ciclo = "Desarrollo de Aplicaciones Multiplataforma";
            precio = 20;
            break;
        case "1ºASIR":
        case "2ºASIR":
            ciclo = "Administracion de Sistemas Informaticos y Redes";
            precio = 15;
            break;
    }

    document.getElementById("NombreyApellidos").value = nombre + " " + apellido;
    document.getElementById("EdadDevuelta").value = edad;
    document.getElementById("CursoyTurno").value = curso + " " + turno;
    document.getElementById("NombreCiclo").value = ciclo;
    for (i = 0; i < modulos.length; i++) {
        if (modulos[i].checked) {
            values.push(modulos[i].value);
            nModulos++;
        }
    }
    document.getElementById("Precio").value = precio * nModulos;
    document.getElementById("Matriculados").value = values;
}