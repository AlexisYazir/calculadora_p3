// Variables globales
let a: number;
let b: number;
let resultado: number | string;

// Funciones
function sumar(a: number, b: number): number {
    return a + b;
}

function restar(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number | string {
    if (b === 0) {
        return "No se puede dividir por 0";
    }
    return a / b;
}

//se capturan los elementos de formulario
function calcularResultado() {
    const num1 = document.getElementById("number_1") as HTMLInputElement;
    const num2 = document.getElementById("number_2") as HTMLInputElement;
    const operacionInput = document.getElementById("operacion") as HTMLSelectElement;
    const resultadoSpan = document.getElementById("resultado") as HTMLElement;

    // Parseo de valores
    a = parseFloat(num1.value);
    b = parseFloat(num2.value);
    const operacion = operacionInput.value;

    // Realiza la operación seleccionada
    switch (operacion) {
        case "1": 
            resultado = sumar(a, b);
            break;
        case "2": 
            resultado = restar(a, b);
            break;
        case "3": 
            resultado = multiplicar(a, b);
            break;
        case "4": 
            resultado = dividir(a, b);
            break;
        default:
            resultado = "Operación no válida";
    }

    resultadoSpan.textContent = resultado.toString();
}

// Escuchar el evento de clic
const calcularBtn = document.getElementById("calcular") as HTMLButtonElement;
calcularBtn.addEventListener("click", calcularResultado);
