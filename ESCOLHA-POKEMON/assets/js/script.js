const listaBtns = document.querySelectorAll("#btns-treinador li");
const listaImgs = document.querySelectorAll("#lista-treinadores li");
const listaPokemons = document.querySelectorAll("#lista-pokemons li");

if (listaBtns.length && listaImgs.length) {
  listaImgs[0].classList.add("ativo");

  function chamarTreinador(img) {
    listaImgs.forEach((img) => {
      img.classList.remove("ativo");
    });
    listaImgs[img].classList.add("ativo");
  }

  listaBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      chamarTreinador(index);
    });
  });
}
