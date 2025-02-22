//Carrossel de imagens
    let indexImagem = 0;

    setInterval(function(){
    const imagens = document.querySelectorAll('.imagem');
    const totalImagens = imagens.length;
    if (indexImagem >= totalImagens - 1) {
        indexImagem = -1;
    } else if (indexImagem < 0) {
        indexImagem = totalImagens - 1;
    }
        indexImagem ++;

    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${indexImagem * 100}%)`; /* Mudança para porcentagem */
    }, 8000);

function mudarImagem(n) {
    const imagens = document.querySelectorAll('.imagem');
    const totalImagens = imagens.length;

    indexImagem += n;

    if (indexImagem >= totalImagens) {
        indexImagem = 0;
    } else if (indexImagem < 0) {
        indexImagem = totalImagens - 1;
    }

    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${indexImagem * 100}%)`; /* Mudança para porcentagem */
}

//abrir menu
function abrirMenu() {
    var bnt = document.getElementById("btn")
    var btn2 = document.getElementById("btn2")
    var menu = document.getElementById("menu")
    var perfil = document.getElementById("perfil")
    var carrossel = document.getElementById("carrossel")

    menu.style.right = '0%'
    bnt.style.display = 'none'
    btn2.style.display = 'flex'
    perfil.style.display = 'none'
    carrossel.style.display ='none'
}

//fechar menu
function fecharMenu() {
    var menu = document.getElementById("menu")
    var btn = document.getElementById("btn")
    var perfil = document.getElementById("perfil")
    var carrossel = document.getElementById("carrossel")

    menu.style.right = '-110%'
    btn.style.display = 'flex'
    perfil.style.display = 'flex'
    carrossel.style.display = 'flex'
}
