let lista = document.querySelectorAll('.item')
let next = document.getElementById('proximo')
let prev = document.getElementById('anterior')

let contar = lista.length
let ativo = 0

next.onclick = () => {
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
}

prev.onclick = () => {
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
}

// "." = pegar tudo
// classlist é uma palavra reservada para retirar algo