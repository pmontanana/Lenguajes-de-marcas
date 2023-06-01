function validar() {
    let nombre = document.getElementById("Nombre").value;
    let edad = parseInt(document.getElementById("Edad").value);
    let apellidos = document.getElementById("Apellidos").value;
    let curso = document.getElementById("Curso").value;
    let modulos = document.getElementsByName("Modulos");

    if (nombre == "") {
        alert("Introduzca un nombre");
        return;
    }
    if (apellidos == "") {
        alert("Introduzca un apellido");
        return;
    } 
    if (edad < 16) {
        alert("Tienes que ser mayor de 15 años");
        return;
    } 
    if (isNaN(edad)){
        alert("Escribe una edad");
        return;
    }
    if (curso == "Default") {
        alert("Elige un curso");
        return;
    }

    let values = [];
    for (let i = 0; i < modulos.length; i++) {
        if (modulos[i].checked) {
            values.push(modulos[i].id);
        }
    }
    if (values.length == 0) {
        alert('Elige por lo menos un modulo');
        return;
    }

    alert("Todos los datos son correctos");

}