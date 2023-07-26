// Selecionando as id's
const inputN1 = document.getElementById('n1')
const inputN2 = document.getElementById('n2')

// Selecionando os botões das operações
const btnSoma = document.getElementById('soma')
const btnSubtrai = document.getElementById('subtrai')
const btnDivide = document.getElementById('divide')
const btnMultiplica = document.getElementById('multiplica')

// Caixa de resultado
const resultado = document.getElementById('resultado')

// Função Somar
function somar() {
    somar = Number(n1.value) + Number(n2.value)
    resultado.innerHTML = `O resultado da sua soma é: ${somar}`
}

// Função Subtrair
function subtrair() {
    subtrair = Number(n1.value) - Number(n2.value)
    resultado.innerHTML = `O resultado da sua subtração é: ${subtrair}`
}

// Função Dividir
function dividir() {
    dividir = Number(n1.value) / Number(n2.value)
    resultado.innerHTML = `O resultado da sua divisão é: ${dividir}`
}

// Função Multiplicar
function multiplicar() {
    multiplicar = Number(n1.value) * Number(n2.value)
    resultado.innerHTML = `O resultado da sua multiplicação é: ${multiplicar}`
}


// Eventos ao clicar nos botões
btnSoma.addEventListener('click', somar)
btnSubtrai.addEventListener('click', subtrair)
btnDivide.addEventListener('click', dividir)
btnMultiplica.addEventListener('click', multiplicar)


// Refresh da Pagina
const load = document.getElementById('load')
load.addEventListener('click', function reload() {
    document.location.reload(true)
})