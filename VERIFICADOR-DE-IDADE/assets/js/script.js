function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var inputAno = document.querySelector("#txtano");
  var resultado = document.querySelector("#res");
  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (Number(inputAno.value) <= 0 || Number(inputAno.value) > ano) {
    resultado.innerHTML = "[ERRO] Insira uma data válida";
    img.setAttribute("src", "./assets/img/erro.png");
    resultado.appendChild(img);
  } else {
    var sex = document.getElementsByName("radsex");
    var idade = ano - Number(inputAno.value);
    var genero = "";
    if (sex[0].checked) {
      genero = "Homem";
      if (idade <= 10) {
        img.setAttribute("src", "./assets/img/menino.png"); // Criança
      } else if (idade < 21) {
        img.setAttribute("src", "./assets/img/homem-adolescente.png"); // Jovem
      } else if (idade < 50) {
        img.setAttribute("src", "./assets/img/homem.png"); // Adulto
      } else {
        img.setAttribute("src", "./assets/img/vovo.png"); // Idoso
      }
    } else if (sex[1].checked) {
      genero = "Mulher";
      if (idade <= 10) {
        img.setAttribute("src", "./assets/img/menina.png"); // Criança
      } else if (idade < 21) {
        img.setAttribute("src", "./assets/img/mulher-adolescente.png"); // Jovem
      } else if (idade < 50) {
        img.setAttribute("src", "./assets/img/mulher.png"); // Adulto
      } else {
        img.setAttribute("src", "./assets/img/vovozinha.png"); // Idoso
      }
    }

    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    resultado.appendChild(img);
  }
}
