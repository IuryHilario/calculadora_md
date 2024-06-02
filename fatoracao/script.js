document.getElementById("verificarBtn").addEventListener("click", function() {
    let number = parseInt(document.getElementById("numberInput").value);
    let result;

    if (isNaN(number)) {
        result = "Por favor, digite um número válido.";
    } else if (number === 0 || number === 1) {
        result = number.toString();
    } else if (number < 0) {
        let divisao = fatorar(Math.abs(number));
        let fatorDict = contarFatores(divisao);
        let formatar = formatarFatores(fatorDict);
        result = `${formatar} x (-1)`;
    } else {
        let divisao = fatorar(number);
        let fatorDict = contarFatores(divisao);
        let formatar = formatarFatores(fatorDict);
        result = formatar;
    }

    document.getElementById("result").innerHTML = result;
});

function fatorar(number) {
    let divisao = [];
    let T = 0;
    let c = 1;

    while (T < 1) {
        c += 1;
        if (number % c === 0) {
            divisao.push(c);
            number /= c;

            try {
                number = parseInt(number);
                c = 1;
            } catch (error) {}

            if (number === 1) {
                T = 1;
            }
        }
    }

    return divisao;
}

function contarFatores(divisao) {
    let fatorDict = {};
    for (let fator of divisao) {
        if (fator in fatorDict) {
            fatorDict[fator] += 1;
        } else {
            fatorDict[fator] = 1;
        }
    }
    return fatorDict;
}

function formatarFatores(fatorDict) {
    let fatoresFormatados = [];
    for (let [fator, expoente] of Object.entries(fatorDict)) {
        if (expoente > 1) {
            fatoresFormatados.push(`${fator}<sup>${expoente}</sup>`);
        } else {
            fatoresFormatados.push(`${fator}`);
        }
    }
    return fatoresFormatados.join(' x ');
}
