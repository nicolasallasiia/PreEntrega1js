// Variables
const IVA = 0.21; // Constante para cálculo del IVA
const operacionesRealizadas = []; // Array para guardar el historial de operaciones

// Función para pedir un número al usuario
function pedirNumero(mensaje) {
    let numero = parseFloat(prompt(mensaje));
    while (isNaN(numero)) {
        alert("Por favor, ingrese un número válido");
        numero = parseFloat(prompt(mensaje));
    }
    return numero;
}

// Función para agregar una operación al historial
function agregarOperacion(operacion, resultado) {
    operacionesRealizadas.push({ operacion, resultado });
}

// Función para buscar una operación en el historial
function buscarOperacion(busqueda) {
    return operacionesRealizadas.filter(op =>
        op.operacion.toLowerCase().includes(busqueda.toLowerCase())
    );
}

// Inicio del programa
function iniciarPrograma() {
    const nombre = prompt("Ingrese su nombre");
    let edad = parseInt(prompt("Ingrese su edad"));

    while (isNaN(edad) || edad < 18) {
        if (isNaN(edad)) {
            alert("Por favor, ingrese una edad válida.");
        } else if (edad < 18) {
            alert("Debe ser mayor de 18 años para continuar.");
        }
        edad = parseInt(prompt("Ingrese su edad"));
    }

    alert("Bienvenido " + nombre);

    // Menú principal
    const menu = `
    1- Multiplicar
    2- Dividir
    3- Sumar
    4- Restar
    5- Calcular IVA
    6- Mostrar Historial de Operaciones
    7- Buscar Operaciones
    8- Salir
    `;

    let opcion;

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
                let resultadoMultiplicacion = numero1 * multiplicador;
                alert("El resultado es: " + resultadoMultiplicacion);
                agregarOperacion("Multiplicar", resultadoMultiplicacion);
                break;

            case 2: // Dividir
                let dividendo = pedirNumero("Ingrese el número que desea dividir:");
                let divisor = pedirNumero("Ingrese el número por el cual desea dividir:");
                if (divisor !== 0) {
                    let resultadoDivision = dividendo / divisor;
                    alert("El resultado es: " + resultadoDivision);
                    agregarOperacion("Dividir", resultadoDivision);
                } else {
                    alert("No se puede dividir por cero");
                }
                break;

            case 3: // Sumar
                let sumando1 = pedirNumero("Ingrese el primer número que desea sumar:");
                let sumando2 = pedirNumero("Ingrese el segundo número que desea sumar al anterior:");
                let resultadoSuma = sumando1 + sumando2;
                alert("El resultado es: " + resultadoSuma);
                agregarOperacion("Sumar", resultadoSuma);
                break;

            case 4: // Restar
                let minuendo = pedirNumero("Ingrese el primer número que desea restar:");
                let sustraendo = pedirNumero("Ingrese el número que desea restar al anterior:");
                let resultadoResta = minuendo - sustraendo;
                alert("El resultado es: " + resultadoResta);
                agregarOperacion("Restar", resultadoResta);
                break;

            case 5: // Calcular IVA
                let base = pedirNumero("Ingrese el monto al cual desea calcularle el IVA:");
                let resultadoIVA = base * IVA;
                let totalConIVA = base + resultadoIVA;
                alert("El IVA es: " + resultadoIVA + ". El monto total con IVA es: " + totalConIVA);
                agregarOperacion("Calcular IVA", totalConIVA);
                break;

            case 6: // Mostrar Historial
                if (operacionesRealizadas.length === 0) {
                    alert("No se han realizado operaciones todavía.");
                } else {
                    let historial = "Historial de Operaciones:\n";
                    operacionesRealizadas.forEach((op, index) => {
                        historial += $ (index + 1) (op.operacion); {op.resultado} n;
                    });
                    alert(historial);
                }
                break;

            case 7: // Buscar Operaciones
                let busqueda = prompt("Ingrese un término para buscar en el historial:");
                if (busqueda) {
                    let resultadosBusqueda = buscarOperacion(busqueda);
                    if (resultadosBusqueda.length === 0) {
                        alert("No se encontraron operaciones con ese término.");
                    } else {
                        let resultados = "Resultados de búsqueda:\n";
                        resultadosBusqueda.forEach((op, index) => {
                            resultados += $(index + 1); {op.operacion}; {op.resultado} n;
                        });
                        alert(resultados);
                    }
                } else {
                    alert("No ingresó ningún término para buscar.");
                }
                break;

            case 8: // Salir
                alert("Gracias por usar el programa. ¡Hasta luego!");
                return;

            default:
                alert("Opción inválida");
                break;
        }
    }
}

// Llamar a la función principal
iniciarPrograma();