function verificarDivisibilidade() {
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
    } else if (number1 % number2 === 0) {
        resultDiv.innerHTML = `${number1} é divisível por ${number2}.`;
    } else {
        resultDiv.innerHTML = `${number1} não é divisível por ${number2}.`;
    }
}

function mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function mmc(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    return Math.abs((a * b) / mdc(a, b));
}

function calcularMMC() {
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

    let mmcResult = mmc(number1, number2);
    resultDiv.innerHTML = `MMC(${number1}, ${number2}) = ${mmcResult}.`;
}

function calcularMDC() {
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

    let mdcResult = mdc(number1, number2);
    resultDiv.innerHTML = `MDC(${number1}, ${number2}) = ${mdcResult}.`;
}
