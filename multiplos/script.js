function multiplo(number1, number2) {
    if (number1 % number2 === 0) {
        return `${number1} é múltiplo de ${number2}`;
    } else {
        return `${number1} NÃO é múltiplo de ${number2}`;
    }
}

function verificarMultiplos() {
    let number1 = document.getElementById("numberInput1").value;
    let number2 = document.getElementById("numberInput2").value;
    let resultDiv = document.getElementById("result");

    if (number1 === '' || isNaN(number1)) {
        resultDiv.innerHTML = "Primeiro número inválido";
        return;
    }

    if (number2 === '' || isNaN(number2)) {
        resultDiv.innerHTML = "Segundo número inválido";
        return;
    }

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    if (number2 === 0) {
        resultDiv.innerHTML = "O segundo número não pode ser zero!";
    } else {
        let resultado = multiplo(number1, number2);
        resultDiv.innerHTML = resultado;
    }
}
