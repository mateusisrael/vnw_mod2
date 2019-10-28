
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');
let cont = 0;

class Fruta{

    constructor(nome, img, texto, cor) {
        this.nome = nome;
        this.img = img;
        this.texto = texto;
        this.cor = cor;
    }
}




let lista_de_frutas = [
    new Fruta('Maçã', './img/maca.jpg', 'Maçã é vermelha', 'red'),
    new Fruta('Abacaxi', './img/abacaxi.jpg', 'Abacaxi nem é bom', 'yellow'),
    new Fruta('Melão', './img/melao.jpg', 'Melão é bom!', 'yellow'),
    new Fruta('Abacate', './img/abacate.jpg', 'A melhor fruta', 'green'),
]



previous.addEventListener('click', () => {
    if(cont > 0) {
        cont--;
        console.log(cont);
        atualizarSlide(cont);
    }


});

next.addEventListener('click', () => {
    if(cont < lista_de_frutas.length - 1) {
        cont++;
        console.log(cont);
        atualizarSlide(cont);
    }


});



function atualizarSlide(ind) {
    let fruta_img = document.querySelector('#img');
    let fruta_title = document.querySelector('#title');
    let fruta_text = document.querySelector('#text');
    let text_cont = document.querySelector('#text-cont');

    text_cont.style = `border-top: 10px solid ${lista_de_frutas[ind].cor};`
    fruta_img.setAttribute('src',  lista_de_frutas[ind].img);
    fruta_title.innerHTML = lista_de_frutas[ind].nome;
    fruta_text.innerHTML =  lista_de_frutas[ind].texto;
}

window.onload = atualizarSlide(cont);
