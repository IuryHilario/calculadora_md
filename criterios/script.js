function divisivel(number) {
    number = Math.abs(number);
    let divisibilidade = new Set();

    if (number === 0) {
        divisibilidade.add(number);
        return [0];
    }

    for (let c = 1; c <= Math.sqrt(number); c++) {
        if (number % c === 0) {
            divisibilidade.add(c);
            divisibilidade.add(-c);
            if (c !== number / c) {
                divisibilidade.add(number / c);
                divisibilidade.add(-(number / c));
            }
        }
    }

    return Array.from(divisibilidade).sort((a, b) => a - b);
}

function checkDivisibility() {
    let number = document.getElementById('numberInput').value;
    let resultDiv = document.getElementById('result');

    // Verifica se a entrada é um número válido
    if (number === '' || isNaN(number)) {
        resultDiv.innerHTML = 'Por favor, digite um número válido';
        return;
    }

    let divisors = divisivel(Number(number));
    let result = 'Divisores: ' + divisors.join(', ');

    resultDiv.innerHTML = result;
}
