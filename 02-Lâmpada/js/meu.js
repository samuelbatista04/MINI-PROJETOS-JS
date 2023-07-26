//Selecionando elementos
const lampada = document.getElementById('lamp')
const lampadaLigada = document.getElementById('turnOn')
const lampadaDesligada = document.getElementById('turnOff')
const lampadaQuebrada = document.getElementById('broken')

// função ligar a lâmpada
function ligarLampada() {
    lampada.setAttribute('src', './img/ligada.jpg')
}

// função desligar a lâmpada
function desligarLampada() {
    lampada.setAttribute('src', './img/desligada.jpg')
}

// função quebrar a lâmpada no click
function quebrarLampada() {
    lampada.setAttribute('src', './img/quebrada.jpg')
}


lampadaLigada.addEventListener('click', ligarLampada)
lampadaDesligada.addEventListener('click', desligarLampada)
lampadaQuebrada.addEventListener('click', quebrarLampada)
// lampada.addEventListener('dblclick', quebrarLampada)
// lampada.addEventListener('mouseover', ligarLampada)


// Recarregar Pagina
// const load = document.getElementById('load')
// load.addEventListener('click', function reload() {
//     document.location.reload(true)
// })

