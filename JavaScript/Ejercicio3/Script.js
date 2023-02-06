let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (num1 > num2) {
  alert("El número mayor es: " + num1 + "\nEl número menor es: " + num2);
  document.write("El número mayor es: " + num1 + "<br>El número menor es: " + num2);
} else {
  alert("El número mayor es: " + num2 + "\nEl número menor es: " + num1);
  document.write("El número mayor es: " + num2 + "<br>El número menor es: " + num1);
}