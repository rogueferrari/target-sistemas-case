// Dado o valor de faturamento mensal de uma distribuidora
// calcule o percentual de representação que cada estado teve dentro do valor total mensal

const faturamentoEstados = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'outros', valor: 19849.53 },
];

let faturamentoTotalMensal = 0;
let percentualSP = 0;
let percentualRJ = 0;
let percentualMG = 0;
let percentualES = 0;
let outros = 0;

faturamentoEstados.forEach((faturamento) => {
  faturamentoTotalMensal += faturamento.valor;
});

faturamentoEstados.forEach((faturamento) => {
  switch (faturamento.estado) {
    case 'SP':
      percentualSP = (faturamento.valor / faturamentoTotalMensal) * 100;
      break;
    case 'RJ':
      percentualRJ = (faturamento.valor / faturamentoTotalMensal) * 100;
      break;
    case 'MG':
      percentualMG = (faturamento.valor / faturamentoTotalMensal) * 100;
      break;
    case 'ES':
      percentualES = (faturamento.valor / faturamentoTotalMensal) * 100;
      break;
    case 'outros':
      outros = (faturamento.valor / faturamentoTotalMensal) * 100;
      break;
  }
});

console.log(`Percentual SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual Outros: ${outros.toFixed(2)}%`);
