const axios = require("axios");

let lista = [];
let menor = 0;
let maior = 0;
let media = 0;
let total = 0;
let numDias = 0;

async function mostrar() {
  try {
    for (let id = 0; id < 30; id++) {
      const resposta = await axios.get("http://localhost:3000/" + id);

      const faturamento = resposta.data;
      lista.push(faturamento);
      const valor = faturamento.valor;
      const dia = faturamento.dia;
      if (id == 0) {
        menor = valor;
      }

      maior = valor > maior ? valor : maior;
      menor = valor != 0 && valor < menor ? valor : menor;
      media = media + valor; //soma os valores
      total = valor != 0 ? total + 1 : total;
    }
    console.log("======================================================");
    console.log(
      "O maior valor de faturamento ocorrido em um dia do mês: " + maior
    );
    console.log(
      "O menor valor de faturamento ocorrido em um dia do mês: " + menor
    );
    media = media / total;
    console.log("MEDIA: " + media);
    lista.forEach((item) => {
      numDias = item.valor > media ? numDias + 1 : numDias;
    });
    console.log(
      "Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.: " +
        numDias
    );
    console.log("======================================================");
  } catch (error) {
    console.log("Algum erro ocorreu: " + error);
  }
}

mostrar();
