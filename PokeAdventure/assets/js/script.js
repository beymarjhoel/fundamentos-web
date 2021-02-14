let nome = window.document.getElementById('nome')
let senha = window.document.getElementById('senha')
let confirmarSenha = window.document.getElementById('confirmarSenha')
let email = document.querySelector("#email")
let cpf = window.document.getElementById('cpf')

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = '#F0FF00'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = '#55FF00'
    }
}

function validaSenha() {
    let txt = document.querySelector('#txtSenha') 
    if (senha.value.length <= 5) {
        txt.innerHTML = 'Senha fraca'
        txt.style.color = 'white'
    } else if (senha.value.length >= 6 && senha.value.length <= 10) {
        txt.innerHTML = 'Senha mediana'
        txt.style.color = '#F0FF00'
    } else {
        txt.innerHTML = 'Senha forte'
        txt.style.color = '#55FF00'
    }
}

function validaConfirmarSenha() {
    let txt = document.querySelector('#txtConfirmarSenha')
    if (confirmarSenha.value == senha.value) {
        txt.innerHTML = 'Confirmado com sucesso'
        txt.style.color = '#55FF00'
    } else {
        txt.innerHTML = 'Não foi confirmado'
        txt.style.color = '#F0FF00'
    }
}


function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    //O método indexOf() verifica se tem algo na variável, se for true retorna 1, se for false retorna -1
    if (email.value.indexOf('@') == -1) {
        txt.innerHTML = 'E-mail inválido'
        txt.style.color = '#F0FF00'
    } else {
        txt.innerHTML = 'E-mail válido'
        txt.style.color = '#55FF00'
    }
}

function validaCpf() {
    let txt = document.querySelector('#txtCpf')
    if (cpf.value.length == 11 ) {
        txt.innerHTML = 'CPF válido'
        txt.style.color = '#55FF00'
    } else {
        txt.innerHTML = 'CPF inválido'
        txt.style.color = '#F0FF00'
    }
}