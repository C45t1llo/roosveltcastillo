// Obtiene el elemento del display de la calculadora
let display = document.getElementById('display');
let valorActual = '';
let operador = '';
let primerValor = '';

// Función para agregar un número al valor actual
function agregarNumero(numero) {
    if (numero === '.' && valorActual.includes('.')) return;
    valorActual += numero;
    actualizarDisplay();
}

// Función para agregar un operador (+, -, *, /)
function agregarOperador(op) {
    if (valorActual === '' && op === '-') {
        valorActual = op; 
        actualizarDisplay();
        return;
    }
    if (valorActual === '') return;
    if (primerValor !== '') {
        calcular();
    }
    primerValor = valorActual;
    operador = op;
    valorActual = '';
    actualizarDisplay();
}

// Función para realizar el cálculo
function calcular() {
    if (primerValor === '' || valorActual === '' || operador === '') return;
    let resultado;
    const previo = parseFloat(primerValor);
    const actual = parseFloat(valorActual);
    
    switch (operador) {
        case '+':
            resultado = previo + actual;
            break;
        case '-':
            resultado = previo - actual;
            break;
        case '*':
            resultado = previo * actual;
            break;
        case '/':
            resultado = previo / actual;
            break;
        default:
            return;
    }
    
    valorActual = resultado.toString();
    operador = '';
    primerValor = '';
    actualizarDisplay();
}

// Función para limpiar el display
function limpiarDisplay() {
    valorActual = '';
    primerValor = '';
    operador = '';
    actualizarDisplay();
}

// Función para actualizar el display
function actualizarDisplay() {
    display.value = valorActual || '0';
}

// Función para convertir binario a decimal
function convertirBinarioADecimal() {
    const entradaBinaria = document.getElementById('entradaBinarioADecimal').value;
    if (/^[01]+$/.test(entradaBinaria)) { // Valida número binario
        const valorDecimal = parseInt(entradaBinaria, 2);
        document.getElementById('resultadoBinarioADecimal').textContent = `Decimal: ${valorDecimal}`;
    } else {
        document.getElementById('resultadoBinarioADecimal').textContent = 'Por favor, ingresa un número binario válido.';
    }
}

// Función para convertir decimal a binario
function convertirDecimalABinario() {
    const entradaDecimal = document.getElementById('entradaDecimalABinario').value;
    if (/^\d+$/.test(entradaDecimal)) { // Valida número decimal
        const valorBinario = parseInt(entradaDecimal, 10).toString(2);
        document.getElementById('resultadoDecimalABinario').textContent = `Binario: ${valorBinario}`;
    } else {
        document.getElementById('resultadoDecimalABinario').textContent = 'Por favor, ingresa un número decimal válido.';
    }
}

// Función para convertir binario a hexadecimal
function convertirBinarioAHexadecimal() {
    const entradaBinaria = document.getElementById('entradaBinarioAHexadecimal').value;
    if (/^[01]+$/.test(entradaBinaria)) { // Valida número binario
        const valorHexadecimal = parseInt(entradaBinaria, 2).toString(16).toUpperCase();
        document.getElementById('resultadoBinarioAHexadecimal').textContent = `Hexadecimal: ${valorHexadecimal}`;
    } else {
        document.getElementById('resultadoBinarioAHexadecimal').textContent = 'Por favor, ingresa un número binario válido.';
    }
}

// Función para convertir hexadecimal a binario
function convertirHexadecimalABinario() {
    const entradaHexadecimal = document.getElementById('entradaHexadecimalABinario').value;
    if (/^[0-9A-Fa-f]+$/.test(entradaHexadecimal)) { // Valida número hexadecimal
        const valorBinario = parseInt(entradaHexadecimal, 16).toString(2);
        document.getElementById('resultadoHexadecimalABinario').textContent = `Binario: ${valorBinario}`;
    } else {
        document.getElementById('resultadoHexadecimalABinario').textContent = 'Por favor, ingresa un número hexadecimal válido.';
    }
}

// Función para analizar el texto
function analizarTexto() {
    const texto = document.getElementById('entradaTexto').value;
    const caracteres = texto.length;
    const vocales = (texto.match(/[aeiouáéíóúü]/gi) || []).length;
    const signos = (texto.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;
    const espacios = (texto.match(/\s/g) || []).length;
    const palabras = (texto.match(/\b\S+\b/g) || []).length;
    const digitos = (texto.match(/\d/g) || []).length;

    document.getElementById('resultadoAnalisisTexto').innerHTML = `
        Caracteres: ${caracteres}<br>
        Vocales: ${vocales}<br>
        Signos: ${signos}<br>
        Espacios: ${espacios}<br>
        Palabras: ${palabras}<br>
        Dígitos: ${digitos}
    `;
}

// Función para invertir una cadena
function invertirCadena() {
    const str = document.getElementById('entradaCadena').value;
    const invertido = str.split('').reverse().join('');
    document.getElementById('resultadoCadenaInvertida').textContent = `Invertido: ${invertido}`;
}

// Función para comparar frases
function compararFrases() {
    const frase1 = document.getElementById('frase1').value;
    const frase2 = document.getElementById('frase2').value;
    const palabras1 = (frase1.match(/\b\S+\b/g) || []).length;
    const palabras2 = (frase2.match(/\b\S+\b/g) || []).length;

    let resultado;
    if (palabras1 > palabras2) {
        resultado = 'La primera frase tiene más palabras.';
    } else if (palabras1 < palabras2) {
        resultado = 'La segunda frase tiene más palabras.';
    } else {
        resultado = 'Ambas frases tienen el mismo número de palabras.';
    }

    document.getElementById('resultadoComparacionFrases').textContent = resultado;
}

// Función para calcular resultados
function calcularResultados() {
    // Obtener el arreglo de números desde el input
    let arregloEntrada = document.getElementById('arregloEntrada').value;
    
    // Convertir el input en un arreglo de números
    let numeros = arregloEntrada.split(',').map(num => parseInt(num.trim()));
    
    // Calcular números primos
    let numerosPrimos = obtenerPrimos(numeros);
    mostrarResultados('numerosPrimos', 'Números primos: ' + numerosPrimos.join(', '));
    
    // Calcular números perfectos
    let numerosPerfectos = obtenerPerfectos(numeros);
    mostrarResultados('numerosPerfectos', 'Números perfectos: ' + numerosPerfectos.join(', '));
    
    // Calcular promedio y moda de notas
    let notas = numeros; // Suponemos que el arreglo de números son las notas
    
    let promedio = calcularPromedio(notas);
    mostrarResultados('promedio', 'Promedio: ' + promedio.toFixed(2));
    
    let moda = calcularModa(notas);
    mostrarResultados('moda', 'Moda: ' + moda);
}

// Función para obtener números primos
function obtenerPrimos(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

// Función para obtener números perfectos
function obtenerPerfectos(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        let suma = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                suma += i;
                if (i !== 1 && i !== num / i) {
                    suma += num / i;
                }
            }
        }
        return suma === num;
    });
}

// Función para calcular el promedio
function calcularPromedio(arr) {
    let suma = arr.reduce((acc, val) => acc + val, 0);
    return suma / arr.length;
}

// Función para calcular la moda
function calcularModa(arr) {
    let frecuencia = {};
    arr.forEach(num => {
        if (frecuencia[num]) {
            frecuencia[num]++;
        } else {
            frecuencia[num] = 1;
        }
    });
    
    let maxFrecuencia = 0;
    let moda = null;
    
    for (let num in frecuencia) {
        if (frecuencia[num] > maxFrecuencia) {
            maxFrecuencia = frecuencia[num];
            moda = num;
        }
    }
    
    return moda;
}

// Función para mostrar resultados en el HTML
function mostrarResultados(id, resultado) {
    let resultsDiv = document.getElementById(id);
    resultsDiv.innerHTML = `<div class="result-item">${resultado}</div>`;
}
