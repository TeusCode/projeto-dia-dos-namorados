const carta = document.getElementById('carta-namorados')

function abrirCarta() {
    console.log('carta abriu!')
    carta.src = 'imagens/carta-aberta.png'
    carta.style.height = '200px'
}
function fecharCarta() {
    console.log('carta fechou!')
    carta.src = 'imagens/carta-fechada.png'
    carta.style.height = '150px'
}
