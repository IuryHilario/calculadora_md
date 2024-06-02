function parImpar(number) {
    if (number % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const verificarBtn = document.getElementById("verificarBtn");
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");

    verificarBtn.addEventListener("click", function() {
        const number = parseInt(numberInput.value);
        if (!isNaN(number)) {
            result.textContent = `O número ${number} é ${parImpar(number)}.`;
        } else {
            result.textContent = "Por favor, digite um número válido.";
        }
    });
});
