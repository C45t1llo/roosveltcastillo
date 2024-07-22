function contarRepeticiones() {
    const sequence = document.getElementById('sequenceInput').value.split(',').map(Number);
    const number = parseInt(document.getElementById('numberToFind').value);
    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === number) {
            count++;
        }
    }

    document.getElementById('patternResult').textContent = `El número ${number} se repite ${count} veces en la secuencia.`;
}

function calcularSuma() {
    const number = parseInt(document.getElementById('number').value);
    if (number <= 0 || isNaN(number)) {
        document.getElementById('result').innerText = "Por favor ingrese un número entero positivo.";
        return;
    }

    let sum = 0;
    let procesoSuma = '';

    for (let i = 1; i <= number; i++) {
        sum += i;
        procesoSuma += (i === 1) ? i : '+' + i;
    }

    document.getElementById('result').innerText = `La suma de todos los números naturales hasta ${number} es ${procesoSuma} = ${sum}.`;
}

function calcularFactorial() {
    const number = parseInt(document.getElementById('factorialInput').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('factorialResult').textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('factorialResult').textContent = `El factorial de ${number} es ${factorial}.`;

    document.getElementById('factorialResult').insertAdjacentHTML('beforeend', `<br>Explicación: <br> Para calcular ${number}!, multiplicamos ${number} por ${number-1}, por ${number-2}, hasta llegar a 1. <br> Ejemplo: ${number}! = ${Array.from({length: number}, (_, i) => i + 1).reverse().join(' x ')} = ${factorial}.`);
}

function encontrarNumerosParesImpares() {
    const inicio = parseInt(document.getElementById('startNumber').value);
    const fin = parseInt(document.getElementById('endNumber').value);

    if (isNaN(inicio) || isNaN(fin) || inicio > fin) {
        document.getElementById('parityResult').textContent = 'Por favor, ingresa un rango válido.';
        return;
    }

    const pares = [];
    const impares = [];

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    document.getElementById('parityResult').innerHTML = `
        Números pares: ${pares.join(', ')}<br>
        Números impares: ${impares.join(', ')}
    `;
}

function generarTabla() {
    const numero = parseInt(document.getElementById('tableNumber').value);
    const tipoTabla = document.getElementById('tableType').value;
    const resultadoDiv = document.getElementById('tableResult');

    if (isNaN(numero) || numero < 1) {
        resultadoDiv.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        if (tipoTabla === '*') {
            resultado += `${numero} x ${i} = ${numero * i}<br>`;
        } else if (tipoTabla === '+') {
            resultado += `${numero} + ${i} = ${numero + i}<br>`;
        }
    }

    resultadoDiv.innerHTML = resultado;
}

function generarFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value);
    const resultadoDiv = document.getElementById('fibonacciResult');

    if (isNaN(n) || n < 1) {
        resultadoDiv.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let a = 0, b = 1, secuencia = [];

    for (let i = 0; i < n; i++) {
        secuencia.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    resultadoDiv.textContent = `Secuencia de Fibonacci: ${secuencia.join(', ')}`;
}

function verificarPrimos() {
    const entrada = document.getElementById('primeInputs').value;
    const numeros = entrada.split(',').map(num => parseInt(num.trim()));
    const resultadoDiv = document.getElementById('primeResults');
    let resultados = '';

    numeros.forEach(numero => {
        if (isNaN(numero) || numero < 1) {
            resultados += `El valor "${numero}" no es un número entero positivo.<br>`;
            return;
        }

        let esPrimo = true;

        if (numero <= 1) {
            esPrimo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        resultados += esPrimo ? `${numero} es un número primo.<br>` : `${numero} no es un número primo.<br>`;
    });

    resultadoDiv.innerHTML = resultados;
}

function verificarPerfectos() {
    const entrada = document.getElementById('perfectInputs').value;
    const numeros = entrada.split(',').map(num => parseInt(num.trim()));
    const resultadoDiv = document.getElementById('perfectResults');
    let resultados = '';

    numeros.forEach(numero => {
        if (isNaN(numero) || numero < 1) {
            resultados += `El valor "${numero}" no es un número entero positivo.<br>`;
            return;
        }

        let suma = 0;

        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                suma += i;
            }
        }

        resultados += suma === numero ? `${numero} es un número perfecto.<br>` : `${numero} no es un número perfecto.<br>`;
    });

    resultadoDiv.innerHTML = resultados;
}
