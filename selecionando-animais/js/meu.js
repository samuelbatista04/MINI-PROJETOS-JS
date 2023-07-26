// Selecionando botões, animais e versos no html
const listaBtn = document.querySelectorAll('#menu-botoes li')
const listaAnimal = document.querySelectorAll('#lista-animais li')
const listaVerso = document.querySelectorAll('#lista-versos li')

if (listaBtn.length && listaAnimal.length && listaVerso) {
    // itens que iniciam ja ativos
    listaAnimal[0].classList.add('ativo')
    listaVerso[0].classList.add('ativo')

    // Função que seleciona os animais e os versos
    function ativarAnimal(index) {
        listaAnimal.forEach((imgAnimal) => {
            imgAnimal.classList.remove('ativo')
        })

        listaAnimal[index].classList.add('ativo')

        listaVerso.forEach((verso) => {
            verso.classList.remove('ativo')
        })

        listaVerso[index].classList.add('ativo')
    }

    // Loop com evento de click que aciona os botoes
    listaBtn.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            ativarAnimal(index)
        })
    })
}
