function Script1(){
  let num1 = parseFloat(prompt("Pon el primer número:"));
  let num2 = parseFloat(prompt("Pon el segundo número:"));
  
  if (num1 > num2) {
    alert("El número mayor es: " + num1 + "\nEl número menor es: " + num2);
    document.write("El número mayor es: " + num1 + "<br>El número menor es: " + num2);
  } else {
    alert("El número mayor es: " + num2 + "\nEl número menor es: " + num1);
    document.write("El número mayor es: " + num2 + "<br>El número menor es: " + num1);
  }
}

function  Script2(){
  let num1 = parseFloat(prompt("Pon el primer número:"));
  let num2 = parseFloat(prompt("Pon el segundo número:"));
  let num3 = parseFloat(prompt("Pon el tercer número:"));

  let mayor = Math.max(num1, num2, num3);

  alert("El número mayor es: " + mayor);
  document.write("El número mayor es: " + mayor);
}

function Script3(){
  let num = parseFloat(prompt("Pon un numero:"));

  if (num >= 0) {
    alert("El número es positivo");
    document.write("El número es positivo");
  } else {
    alert("El número es negativo");
    document.write("El número es negativo");
  }
}

function Script4(){
  let edad = parseInt(prompt("Pon tu edad:"));

  if (edad >= 18) {
    alert("Usted es mayor de edad");
    document.write("Usted es mayor de edad");
  } else {
    alert("Usted es menor de edad");
    document.write("Usted es menor de edad");
  }
}

function Script5(){
  let nota = parseInt(prompt("Pon tu nota:"))

  if (nota <= 4.99){
    alert("SUSPENSO")
    document.write("SUSPENSO")
  }else{
    alert("APROBADO")
    document.write("APROBADO")
  }
}

function Script6(){
  let edad = parseInt(prompt("Por favor ingrese su edad:"));
  let mensaje;
  
  if (edad < 0 || edad > 100) {
    mensaje = "EDAD ERRONEA";
  } else if (edad >= 0 && edad < 2) {
    mensaje = "Eres un bebé";
  } else if (edad >= 2 && edad < 10) {
    mensaje = "Eres un niño";
  } else if (edad >= 10 && edad < 18) {
    mensaje = "Eres adolescente";
  } else if (edad >= 18 && edad < 65) {
    mensaje = "Eres adulto";
  } else if (edad >= 65) {
    mensaje = "Eres mayor";
  }
  
  alert(mensaje);
  document.write(mensaje);
}

function Script7(){
  let edad = parseInt(prompt("Por favor ingrese su edad:"));
  let mensaje;

  switch (edad) {
    case 0:
      mensaje = "Acaba de nacer hace poco. No ha cumplido el año.";
      break;
    case 18:
      mensaje = "Está justo en la mayoría de edad.";
      break;
    case 65:
      mensaje = "Está en la edad de jubilación.";
      break;
    default:
      mensaje = "La edad no es crítica.";
}

alert(mensaje);
document.write(mensaje);
}

function Script8(){
  let tipMot = parseInt(prompt("Ingresa un tipo de motor(1, 2, 3 o 4):"));
  let mensaje;

  switch (tipMot){
    case 0:
      mensaje = "No hay establecido un valor definido para el tipo de bomba"
      break;
    case 1:
      mensaje = "La bomba es una bomba de agua"
      break;
    case 2:
      mensaje = "La bomba es una bomba de gasolina"
      break;
    case 3:
      mensaje = "La bomba es una bomba de hormigon"
      break;
    case 4:
      mensaje = "La bomba es una bomba de pasta alimenticia"
      break;
    default:
      mensaje = "No existe un valor valido para tipo de bomba"
  }

  alert(mensaje);
  document.write(mensaje);
}

function Script9(){
  let mascota = prompt("¿Que mascota tienes?:");

  switch (mascota) {
    case "lagarto":
      alert("Tengo un lagarto");
      document.write("Tengo un lagarto <br> <img src='Script9Img/lagarto.jpg' alt='Fotografía de un lagarto' width='200px' height='200px'>");
      break;
    case "perro":
      alert("Tengo un perro");
      document.write("Tengo un perro <br> <img src='Script9Img/perro.jpg' alt='Fotografía de un perro' width='250px' height='200px'>");
      break;
    case "gato":
      alert("Tengo un gato");
      document.write("Tengo un gato <br> <img src='Script9Img/gato.png' alt='Fotografía de un gato' width='250px' height='200px'>");
      break;
    case "serpiente":
      alert("Tengo una serpiente");
      document.write("Tengo una serpiente <br> <img src='Script9Img/serpiente.jpg' alt='Fotografía de una serpiente' width='250px' height='200px'>");
      break;
    case "loro":
      alert("Tengo un loro");
      document.write("Tengo un loro <br> <img src='Script9Img/loro.jpeg' alt='Fotografía de un loro' width='200px' height='200px'>");
      break;
    default:
      alert("No tengo mascota");
      document.write("No tengo mascota");
      break;
  }
}

function Script10(){
  let mes = parseInt(prompt("Elige un mes del 1 al 12"));
  let productividad;

  switch (mes) {
    case 1:
      productividad = "Enero" + "\n115"
      break;
    case 2:
      productividad = "Febrero" + "\n115"
      break;
    case 3:
      productividad = "Marzo" + "\n115"
      break;
    case 4:
      productividad = "Abril" + "\n117"
      break;
    case 5:
      productividad = "Mayo" + "\n117"
      break;
    case 6:
      productividad = "Junio" + "\n117"
      break;
    case 7:
      productividad = "Julio" + "\n100"
      break;
    case 8:
      productividad = "Agosto" + "\n100"
      break;
    case 9:
      productividad = "Septiembre" + "\n120"
      break;
    case 10:
      productividad = "Octubre" + "\n120"
      break;
    case 11:
      productividad = "Noviembre" + "\n120"
      break;
    case 12:
      productividad = "Diciembre" + "\n121"
      break;
    default:
      productividad = "Error de mes"
      break;
  }

  alert(productividad);
  document.write(productividad);
}

function Script11(){
let NumEmple = prompt("Ingresa el nombre del empleado: ");
let salario = parseFloat(prompt("Ingresa el salario del empleado: "));
let NumDep = parseInt(prompt("Ingresa el número de departamento: "));

let IncreSalar;
let newSalary;

switch (NumDep) {
  case 10:
    IncreSalar = salario * 1;
    newSalary = salario + IncreSalar;
    document.write(`Nombre del empleado: ${NumEmple}<br>Salario: $${salario}<br>Porcentaje de subida: 100%<br>Subida de salario: $${IncreSalar}<br>Nuevo salario: $${newSalary}`);
    break;
  case 20:
    IncreSalar = salario * 0.05;
    newSalary = salario + IncreSalar;
    document.write(`Nombre del empleado: ${NumEmple}<br>Salario: $${salario}<br>Porcentaje de subida: 5%<br>Subida de salario: $${IncreSalar}<br>Nuevo salario: $${newSalary}`);
    break;
  case 30:
    IncreSalar = salario * 0.04;
    newSalary = salario + IncreSalar;
    document.write(`Nombre del empleado: ${NumEmple}<br>Salario: $${salario}<br>Porcentaje de subida: 4%<br>Subida de salario: $${IncreSalar}<br>Nuevo salario: $${newSalary}`);
    break;
  case 40:
  case 41:
  case 42:
  case 43:
  case 44:
  case 45:
  case 46:
  case 47:
  case 48:
  case 49:
  case 50:
  case 51:
  case 52:
  case 53:
  case 54:
  case 55:
  case 56:
  case 57:
  case 58:
  case 59:
  case 60:
  case 61:
  case 62:
  case 63:
  case 64:
  case 65:
  case 66:
  case 67:
  case 68:
  case 69:
  case 70:
    IncreSalar = salario * 0.75;
    newSalary = salario + IncreSalar;
    document.write(`Nombre del empleado: ${NumEmple}<br>Salario: $${salario}<br>Porcentaje de subida: 75%<br>Subida de salario: $${IncreSalar}<br>Nuevo salario: $${newSalary}`);
    break;
  default:
    document.write("El número de departamento ingresado es inválido");
 }
}