let faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let total =
  faturamento.SP +
  faturamento.RJ +
  faturamento.MG +
  faturamento.ES +
  faturamento.Outros;

function calcularPercentual(total, valor) {
  return ((valor / total) * 100).toFixed(2);
}

console.log("Percentual de representação por estado:");
for (let estado in faturamento) {
  console.log(`${estado}: ${calcularPercentual(total, faturamento[estado])}%`);
}
