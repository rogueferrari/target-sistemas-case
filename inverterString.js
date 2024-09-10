// Escreva um programa que inverta os caracteres de um string

const stringTeste = 'Target Sistemas';
let arrayInvertida = [];
let stringInvertida = '';

function inversaoString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    arrayInvertida.push(string[i]);
  }
  return (stringInvertida = arrayInvertida.join(''));
}

const resultado = inversaoString(stringTeste);

console.group();
console.log(`Original: ${stringTeste}`);
console.log(`Invertida: ${resultado}`);
console.groupEnd();
