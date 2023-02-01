function ventana(mensaje, fondo, imagen, titulo){
        nuevaventana=window.open("" ,  "" ,"width=350,height=350");
        nuevaventana.document.write(mensaje);
        nuevaventana.document.bgColor=fondo;
        nuevaventana.document.write("<img src='"+ imagen + "' style='height: 5cm; width: 8cm;'>");
        nuevaventana.document.title=(titulo);
    }

function boton() {
    let edad=document.getElementById("edad").value;

    if(edad<0){
        //No ejecuta nada
    }else if(edad<19){
        ventana("Venta de monopatin negro", "red", "skate.png", "hola");
    }else if(edad<41){
        ventana("Gama suv de fiat con hasta un 50% de descuento", "aqua", "fiat.png" , "Adios");
    }else if(edad<=100){
        ventana("Hoteles al mejor precio en Benidorm", "green", "benidorm.jpg" ,"Depende");
    }else if(edad>101){
        //No ejecuta nada
    }
}

