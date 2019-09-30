alert('Escriu 5 numeros per saber quin es el més petit');

var numeros = [];

// comentari projecte1

numeros.push(prompt('Primer número'));
numeros.push(prompt('Segon número'));
numeros.push(prompt('Tercer número'));
numeros.push(prompt('Quart número'));
numeros.push(prompt('Cinqué número'));
numeros.push(prompt('número 6'));
numeros.push(prompt('número 7'));
numeros.push(prompt('número 8'));
numeros.push(prompt('número 9'));
numeros.push(prompt('número 10'));

var petit = parseInt(numeros[0]);
var gran = parseInt(numeros[0]);

for (var i = 0; i < numeros.length; i++) {
    if (parseInt(numeros[i]) < petit) {
        petit = parseInt(numeros[i]);
    }
    if (parseInt(numeros[i]) > gran) {
        gran = parseInt(numeros[i]);
    }
}

alert('Numero més petit es ' + petit);
alert('Numero més gran es ' + gran);