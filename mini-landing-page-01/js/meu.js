// Modal Login
const btnLogin = document.querySelector('#btn-login')


function iniciaModal(modalId) {
    const modal = document.getElementById(modalId)
    if (modal) {
        modal.classList.add('mostrar')
        modal.addEventListener('click', (evento) => {
            if (evento.target.id === 'fechar' || evento.target.id === modalId) {
                modal.classList.remove('mostrar')
            }
        })
    }
}

btnLogin.addEventListener('click', () => iniciaModal('modal-container'))


// Modal Comprar/Carrinho



// Cores do relógio
const imgRelogio = document.querySelector('#img-relogio')

const btnRosa = document.querySelector('#rosa')
const btnPreto = document.querySelector('#preto')
const btnAzul = document.querySelector('#azul')
const btnBranco = document.querySelector('#branco')

function mudarImg(event) {
    if (event.currentTarget === btnRosa) {
        imgRelogio.setAttribute('src', './img/rosa.png')
    } else if (event.currentTarget === btnPreto) {
        imgRelogio.setAttribute('src', './img/preto.png')
    } else if (event.currentTarget === btnAzul) {
        imgRelogio.setAttribute('src', './img/azul.png')
    } else if (event.currentTarget === btnBranco) {
        imgRelogio.setAttribute('src', './img/branco.png')
    }
}

btnRosa.addEventListener('click', mudarImg)
btnPreto.addEventListener('click', mudarImg)
btnAzul.addEventListener('click', mudarImg)
btnBranco.addEventListener('click', mudarImg)