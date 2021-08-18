/*
Case Sensitive => reconhece letras maiusculas e minusculas (e diferencia elas)
anny / Anny 

document selector 
por tag: document.getElementsByTagName('h3')
por classe: document.getElementsByClassName('.nomedaclasse')
por nome: document.getElementsByName('email')
por id: document.getElementById('#idDoelemento')
por seletor: document.querySelector('qualquer coisa') // selecionar qualquer um dos que estão acima

Declarando variaveis:
var nome = "anny" //menos utilizada, mais antigo
let nome = "anny" //faz a mesma coisa, mais atual - variaveis que vão sofrer mudanças ao longo do tempo
const nome = "anny" //faz a mesma coisa, mais atual - variavel "fixa"
*/

let nome = window.document.getElementById('nome') //o window é opicional
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNoem.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
 }

 function validaEmail() {
    txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { // o OU é o ||
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
 }

 function validaAssunto() {
     let txtAssunto = document.querySelector('#txtAssunto')
     if(assunto.value.length >= 100) {
         txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
         txtAssunto.style.color = 'red'
         txtAssunto.style.display = 'block'
     } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
     }
 }

 function enviar () {
     if (nomeOk == true && emailOk == true && assuntoOk == true) {
         alert('Formulário enviado com sucesso!')
     } else {
         alert('Preencha o formulário corretamente antes de enviar')
     }
 }

 function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }

 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }