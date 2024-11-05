const nombre = prompt("Ingrese su nombre");

let edad = parseInt(prompt("Ingrese su edad"));

while(isNaN(edad)) {
     alert("Edad inválida es menor a 18");
     edad = parseInt(prompt("Ingrese la edad"));
 }

 while(isNaN(edad) || edad < 18) {

     if(isNaN(edad)) {
         alert("Edad inválida es menor a 18");
     } else if(edad < 18) {
         alert("Edad inválida es menor a 18");
     }

     edad = parseInt(prompt("Ingrese la edad"));
 }

 alert("Bienvenido " + nombre);

 const menu = "1- Multiplicar, 2- Dividir, 3- Sumar, 4- Restar, 5- Calcular IVA, 6- Salir";
 let opcion;
 
 function pedirNumero(mensaje) {
     let numero = parseFloat(prompt(mensaje));
     while (isNaN(numero)) {
         alert("Por favor, ingrese un número válido");
         numero = parseFloat(prompt(mensaje));
     }
     return numero;
 }
 
 while (true) {
     opcion = parseInt(prompt("Ingrese la opción: " + menu));
 
     while (isNaN(opcion)) {
         alert("Ingrese un número válido");
         opcion = parseInt(prompt("Ingrese la opción: " + menu));
     }
 
     switch (opcion) {
         case 1: // Multiplicar
             let numero1 = pedirNumero("Ingrese el número que desea multiplicar:");
             let multiplicador = pedirNumero("Ingrese el número por el cual desea multiplicar:");
             alert("El resultado es: " + (numero1 * multiplicador));
             break;
 
         case 2: // Dividir
             let dividendo = pedirNumero("Ingrese el número que desea dividir:");
             let divisor = pedirNumero("Ingrese el número por el cual desea dividir:");
             if (divisor !== 0) {
                 alert("El resultado es: " + (dividendo / divisor));
             } else {
                 alert("No se puede dividir por cero");
             }
             break;
 
         case 3: // Sumar
             let sumando1 = pedirNumero("Ingrese el primer número que desea sumar:");
             let sumando2 = pedirNumero("Ingrese el segundo número que desea sumar al anterior:");
             alert("El resultado es: " + (sumando1 + sumando2));
             break;
 
         case 4: // Restar
             let minuendo = pedirNumero("Ingrese el primer número que desea restar:");
             let sustraendo = pedirNumero("Ingrese el número que desea restar al anterior:");
             alert("El resultado es: " + (minuendo - sustraendo));
             break;
 
         case 5: // Calcular IVA
             let base = pedirNumero("Ingrese el monto al cual desea calcularle el IVA:");
             const IVA = 0.21;
             let resultadoIVA = base * IVA;
             alert("El IVA es: " + resultadoIVA + ". El monto total con IVA es: " + (base + resultadoIVA));
             break;
 
         case 6: // Salir
             alert("Gracias por usar el programa. ¡Hasta luego!");
             break;
 
         default:
             alert("Opción inválida");
             break;
     }
 
     if (opcion === 6) {
         break;
     }
 }