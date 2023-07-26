const btnCalcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    let calculo = (peso / (altura * altura)).toFixed(1);

    classificacao = "";

    if (calculo < 18.5) {
      classificacao = "Magreza";
    } else if (calculo < 24.9) {
      classificacao = "Normal";
    } else if (calculo < 29.9) {
      classificacao = "Sobrepeso";
    } else if (calculo < 34.9) {
      classificacao = "Obesidade grau I";
    } else if (calculo < 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    resultado.innerHTML = `${nome} seu IMC é: ${calculo} e sua classificação é: ${classificacao} `;
  } else {
    resultado.innerHTML = "Preencha todos os campos";
  }
}

btnCalcular.addEventListener("click", imc);

// Refresh da Pagina
const load = document.getElementById("load");
load.addEventListener("click", function reload() {
  document.location.reload(true);
});
