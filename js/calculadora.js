"use strict";
// Variables globales
let a;
let b;
let resultado;
// Funciones
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por 0";
    }
    return a / b;
}
//se capturan los elementos de formulario
function calcularResultado() {
    const num1 = document.getElementById("number_1");
    const num2 = document.getElementById("number_2");
    const operacionInput = document.getElementById("operacion");
    const resultadoSpan = document.getElementById("resultado");
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
function reset() {
    location.reload();
}
// Escuchar el evento de clic
const calcularBtn = document.getElementById("calcular");
const resetForm = document.getElementById("res");
calcularBtn.addEventListener("click", calcularResultado);
resetForm.addEventListener("click", reset);
