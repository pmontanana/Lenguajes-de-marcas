function ventana(mensaje, fondo, imagen, titulo){
        nuevaventana=window.open("" ,  "" ,"width=350,height=350");
        nuevaventana.document.write(mensaje);
        nuevaventana.document.bgColor=fondo;
        nuevaventana.document.write("<img src='"+ imagen + "' style='height: 5cm; width: 8cm;'>");
        nuevaventana.document.title=(titulo);
    }

function boton() {
    let edad=document.getElementById("edad").value;

    if(edad >= 0 && edad < 19){
        ventana("Venta de monopatin negro. 20€", "red", "skate.png", "Monopatin");
    }else if(edad >= 19 && edad < 41){
        ventana("Gama suv de fiat con hasta un 50% de descuento", "aqua", "fiat.png" , "Fiat");
    }else if(edad >= 41 && edad <=100){
        ventana("Hoteles al mejor precio en Benidorm", "green", "benidorm.jpg" ,"Vacaciones en Benidorm");
    }
}

