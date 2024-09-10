// escreva um codígo onde é dado um número e retorne uma string avisando se o número é fibonacci ou nao.
// fibonacci: (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)

let arrFibo = [0, 1];
const checarFibonacci = 42;

function fibonacci(num) {
  if (num < 0) return `O número ${num} não é um fibonacci`;
  if (num === undefined)
    return `Adicione um número para verificar se é fibonacci`;
  for (let i = arrFibo[1]; i <= num; i++) {
    if (arrFibo[i] < num) {
      arrFibo.push(arrFibo[i] + arrFibo[i - 1]);
    }
  }
  if (arrFibo.includes(num)) {
    return `o número ${num} é um fibonacci`;
  } else {
    return `o número ${num} não é um fibonacci`;
  }
}
const resultado = fibonacci(checarFibonacci);

console.log(resultado);
console.log(arrFibo);
