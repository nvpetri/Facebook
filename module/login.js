'use strict'

const button = document.getElementById('login')

function teste() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let validaEmail = "nicolaspetri18@gmail.com"
    let validaSenha = "Nicolas1234"

    if (email && senha) {
        if (email == validaEmail && senha == validaSenha) {
            window.location.href = './html/pgPrincipal.html'
        } else {
            alert('Email e/ou senha incorreto (s)!')
        }
    }
}
button.addEventListener('click', teste)