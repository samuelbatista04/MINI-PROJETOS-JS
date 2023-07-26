function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.querySelector("#txtano");
  var resultado = document.querySelector("div#res");
  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var formSex = document.getElementsByName("radsex");
    var idade = ano - Number(formAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "./assets/img/menino.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./assets/img/homem-adolescente.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./assets/img/homem.png");
      } else {
        // Idoso
        img.setAttribute("src", "./assets/img/vovo.png");
      }
    } else if (formSex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "./assets/img/menina.png");
      } else if (idade < 21) {
        // Jovem
        img.setAttribute("src", "./assets/img/mulher-adolescente.png");
      } else if (idade < 50) {
        // Adulto
        img.setAttribute("src", "./assets/img/mulher.png");
      } else {
        // Idoso
        img.setAttribute("src", "./assets/img/vovozinha.png");
      }
    }
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
