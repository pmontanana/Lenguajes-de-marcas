function comprobar(){
    let texto1 = document.getElementById("texto1");
    let res = document.getElementById("resultado");
    
    if (texto1.value == ""){
        res.value = "El campo esta vacido";
        res.className = "vacido";
        return;
    }
    if (texto1.value.length < 6){
        res.value = "El texto es demasiado corto";
        res.className = "corto";
        return;
    }
    res.value = "TODO OK!";
    res.className = "todook";
}

function contarVocales(){
    let texto1 = document.getElementById("texto1").value;
    let res = document.getElementById("resultado");
    let count = 0;

    res.className = "";
    for (i = 0; i<texto1.length; i++){
        if ("aeiou".indexOf(texto1[i]) > -1){
            count++;
        }
    }
    res.value = count;
}