// Variables
const IVA = 0.21; // Constante para cálculo del IVA
const operacionesRealizadas = []; // Array para guardar el historial de operaciones

// Referencias al DOM
const output = document.getElementById("output");
const menu = document.getElementById("menu");
const inputSection = document.getElementById("input-section");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const executeButton = document.getElementById("execute");
const dataSection = document.getElementById("data-section");
const fetchButton = document.getElementById("fetch-data");

// Función para mostrar el historial de operaciones dinámicamente
function mostrarHistorial() {
    output.innerHTML = "";
    if (operacionesRealizadas.length === 0) {
        output.textContent = "No se han realizado operaciones todavía.";
    } else {
        const ul = document.createElement("ul");
        operacionesRealizadas.forEach((op, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${op.operacion}: ${op.resultado}`;
            ul.appendChild(li);
        });
        output.appendChild(ul);
    }
}

// Función para ejecutar operaciones
function ejecutarOperacion(opcion) {
    let numero1, numero2, resultado;

    switch (opcion) {
        case "multiplicar":
            numero1 = parseFloat(input1.value);
            numero2 = parseFloat(input2.value);
            if (!isNaN(numero1) && !isNaN(numero2)) {
                resultado = numero1 * numero2;
                operacionesRealizadas.push({ operacion: "Multiplicar", resultado });
                result.textContent = `El resultado de multiplicar es: ${resultado}`;
            } else {
                result.textContent = "Por favor, ingrese números válidos.";
            }
            break;

        case "dividir":
            numero1 = parseFloat(input1.value);
            numero2 = parseFloat(input2.value);
            if (!isNaN(numero1) && !isNaN(numero2)) {
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                    operacionesRealizadas.push({ operacion: "Dividir", resultado });
                    result.textContent = `El resultado de dividir es: ${resultado}`;
                } else {
                    result.textContent = "No se puede dividir por cero.";
                }
            } else {
                result.textContent = "Por favor, ingrese números válidos.";
            }
            break;

        case "sumar":
            numero1 = parseFloat(input1.value);
            numero2 = parseFloat(input2.value);
            if (!isNaN(numero1) && !isNaN(numero2)) {
                resultado = numero1 + numero2;
                operacionesRealizadas.push({ operacion: "Sumar", resultado });
                result.textContent = `El resultado de sumar es: ${resultado}`;
            } else {
                result.textContent = "Por favor, ingrese números válidos.";
            }
            break;

        case "restar":
            numero1 = parseFloat(input1.value);
            numero2 = parseFloat(input2.value);
            if (!isNaN(numero1) && !isNaN(numero2)) {
                resultado = numero1 - numero2;
                operacionesRealizadas.push({ operacion: "Restar", resultado });
                result.textContent = `El resultado de restar es: ${resultado}`;
            } else {
                result.textContent = "Por favor, ingrese números válidos.";
            }
            break;

        case "iva":
            numero1 = parseFloat(input1.value);
            if (!isNaN(numero1)) {
                const iva = numero1 * IVA;
                resultado = numero1 + iva;
                operacionesRealizadas.push({ operacion: "Calcular IVA", resultado });
                result.textContent = `El IVA es: ${iva}. Total con IVA: ${resultado}`;
            } else {
                result.textContent = "Por favor, ingrese un número válido.";
            }
            break;

        case "historial":
            mostrarHistorial();
            break;

        default:
            result.textContent = "Opción inválida.";
    }
}

// Función para manejar cambios en el menú
function manejarCambioMenu() {
    const opcion = menu.value;
    if (opcion === "historial") {
        inputSection.style.display = "none";
        executeButton.textContent = "Mostrar Historial";
    } else {
        inputSection.style.display = "block";
        executeButton.textContent = "Ejecutar";
    }
}

// Función para manejar entrada de datos
function manejarEntradaNumero1() {
    if (isNaN(parseFloat(input1.value))) {
        result.textContent = "Por favor, ingrese un número válido en el primer campo.";
    } else {
        result.textContent = "";
    }
}

function manejarEntradaNumero2() {
    if (isNaN(parseFloat(input2.value))) {
        result.textContent = "Por favor, ingrese un número válido en el segundo campo.";
    } else {
        result.textContent = "";
    }
}

// Función para cargar datos 
async function cargarDatos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data = await response.json();

        dataSection.innerHTML = "";
        const ul = document.createElement("ul");
        data.slice(0, 5).forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.id}: ${item.title}`;
            ul.appendChild(li);
        });
        dataSection.appendChild(ul);
    } catch (error) {
        dataSection.textContent = "Ocurrió un error al cargar los datos.";
    }
}

// Event listeners
menu.addEventListener("change", manejarCambioMenu);
executeButton.addEventListener("click", () => {
    const opcion = menu.value;
    ejecutarOperacion(opcion);
});
input1.addEventListener("input", manejarEntradaNumero1);
input2.addEventListener("input", manejarEntradaNumero2);
fetchButton.addEventListener("click", cargarDatos);
