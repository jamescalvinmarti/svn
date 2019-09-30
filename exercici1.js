alert('Escriu 5 numeros per saber quin es el més petit');

var numeros = [];

numeros.push(prompt('Primer número'));
numeros.push(prompt('Segon número'));
numeros.push(prompt('Tercer número'));
numeros.push(prompt('Quart número'));
numeros.push(prompt('Cinqué número'));

var petit = parseInt(numeros[0]);

for (var i = 0; i < numeros.length; i++) {
    if (parseInt(numeros[i]) < petit) {
        petit = parseInt(numeros[i]);
    }
}

alert('Numero més petit es ' + petit);