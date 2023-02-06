function Script1(){
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
  if (num1 > num2) {
    alert("El número mayor es: " + num1 + "\nEl número menor es: " + num2);
    document.write("El número mayor es: " + num1 + "<br>El número menor es: " + num2);
  } else {
    alert("El número mayor es: " + num2 + "\nEl número menor es: " + num1);
    document.write("El número mayor es: " + num2 + "<br>El número menor es: " + num1);
  }
}

function  Script2(){
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let num3 = parseFloat(prompt("Ingrese el tercer número:"));

  let mayor = Math.max(num1, num2, num3);

  alert("El número mayor es: " + mayor);
  document.write("El número mayor es: " + mayor);
}

function Script3(){
  let num = parseFloat(prompt("Ingrese un número:"));

  if (num >= 0) {
    alert("El número es positivo.");
    document.write("El número es positivo.");
  } else {
    alert("El número es negativo.");
    document.write("El número es negativo.");
  }
}

function Script4(){
  let edad = parseInt(prompt("Ingrese su edad:"));

  if (edad >= 18) {
    alert("Usted es mayor de edad.");
    document.write("Usted es mayor de edad.");
  } else {
    alert("Usted es menor de edad.");
    document.write("Usted es menor de edad.");
  }
}

function Script5(){

}

function Script6(){
  
}

function Script7(){
  
}

function Script8(){
  
}

function Script9(){
  
}

function Script10(){
  
}

function Script11(){
  
}