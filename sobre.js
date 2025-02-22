//abrir menu
function abrirMenu() {
    var bnt = document.getElementById("btn")
    var btn2 = document.getElementById("btn2")
    var menu = document.getElementById("menu")
    var perfil = document.getElementById("perfil")
    var info = document.getElementById("info")
    var contatos = document.getElementById("contatos")

    menu.style.right = '0%'
    bnt.style.display = 'none'
    btn2.style.display = 'flex'
    perfil.style.display = 'none'
    info.style.display = 'none'
    contatos.style.display = 'none'
}

//fechar menu
function fecharMenu() {
    var menu = document.getElementById("menu")
    var btn = document.getElementById("btn")
    var perfil = document.getElementById("perfil")
    var info = document.getElementById("info")
    var contatos = document.getElementById("contatos")

    menu.style.right = '-110%'
    btn.style.display = 'flex'
    perfil.style.display = 'flex'
    info.style.display = 'flex'
    contatos.style.display = 'block'
}

//animacao de scroll quadrante 1
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))

//

//animacao de scrool quadrante 2
const myObserver2 = new IntersectionObserver( (entries2) => {
    //console.log(entries2)
    entries2.forEach( (entry2) => {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2')
        } else{
            entry2.target.classList.remove('show2')
        }
    })
})

const elements2 = document.querySelectorAll('.hidden2')

//myObserver2.observe(quadrante2)
elements2.forEach( (element2) => myObserver2.observe(element2))

//

//animacao de scrool contatos
const myObserver3 = new IntersectionObserver( (entries3) => {
    //console.log(entries3)
    entries3.forEach( (entry3) => {
        if (entry3.isIntersecting){
            entry3.target.classList.add('show3')
        } else{
            entry3.target.classList.remove('show3')
        }
    })
})

const elements3 = document.querySelectorAll('.hidden3')

//myObserver3.observe(contatos)
elements3.forEach( (element3) => myObserver3.observe(element3))

//

//animacao de scroll icones
const myObserver4 = new IntersectionObserver( (entries4) => {
    //console.log(entries4)
    entries4.forEach( (entry4) => {
        if (entry4.isIntersecting){
            entry4.target.classList.add('show4')
        } else{
            entry4.target.classList.remove('show4')
        }
    })
})

const elements4 = document.querySelectorAll('.hidden4')

//myObserver4.observe(ctts)
elements4.forEach( (element4) => myObserver4.observe(element4))