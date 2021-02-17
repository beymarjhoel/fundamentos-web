let email = document.querySelector("#email")
let senha = window.document.getElementById('senha')
let confirmarSenha = window.document.getElementById('confirmarSenha')

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    //O método indexOf() verifica se tem algo na variável, se for true retorna 1, se for false retorna -1
    if (email.value.indexOf('@') == -1) {
        txt.innerHTML = 'E-mail inválido'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#f50f1a'
    } else {
        txt.innerHTML = 'E-mail válido'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#55FF00'
    }
}

function validaSenha() {
    let txt = document.querySelector('#txtSenha') 
    if (senha.value.length <= 5) {
        txt.innerHTML = 'Senha fraca'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#f50f1a'
    } else if (senha.value.length >= 6 && senha.value.length <= 10) {
        txt.innerHTML = 'Senha mediana'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#f7f136'
    } else {
        txt.innerHTML = 'Senha forte'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#55FF00'
    }
}

function validaConfirmarSenha() {
    let txt = document.querySelector('#txtConfirmarSenha')
    if (confirmarSenha.value == senha.value) {
        txt.innerHTML = 'Confirmado com sucesso'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#55FF00'
    } else {
        txt.innerHTML = 'Não foi confirmado'
        txt.style.color = 'white'
        txt.style.backgroundColor = '#f50f1a'
    }
}