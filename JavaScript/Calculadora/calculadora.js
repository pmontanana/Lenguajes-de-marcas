function get_valor(id) {
    return parseFloat(document.getElementById(id).value); 

}

function output(valor) {
    document.getElementById("resultado").value = valor
}

function sumar(){
    let suma = get_valor("num1") + get_valor("num2"); 
    output(suma)
}

function restar(){
    let resta = get_valor("num1") - get_valor("num2"); 
    output(resta)
}


