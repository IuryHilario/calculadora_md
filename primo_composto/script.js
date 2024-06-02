function verificarNumero(numero) {
    if (numero <= 1) {
        return "Número Composto";
    }

    let numberPrimo = 0;

    for (let n = 1; n <= numero; n++) {
        if (numero % n === 0) {
            numberPrimo++;
            if (numberPrimo > 2) {
                return "Número Composto";
            }
        }
    }

    if (numberPrimo === 2) {
        return "Número Primo";
    } else {
        return "Número Composto";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const verificarBtn = document.getElementById("verificarBtn");
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");

    verificarBtn.addEventListener("click", function() {
        const numero = parseInt(numberInput.value);
        if (!isNaN(numero)) {
            result.textContent = `O número ${numero} é ${verificarNumero(numero)}.`;
        } else {
            result.textContent = "Por favor, digite um número válido.";
        }
    });
});
