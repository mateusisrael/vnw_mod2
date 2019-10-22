// OBS: Adicionando os elementos(HTML) via js para exercitar a manipulação do DOM.

let body = document.querySelector('body');
let main = document.createElement('main');
let form = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let py_img = document.createElement('img');
let input_valor = document.createElement('p');
input_valor.setAttribute('id', 'input_valor');
let fogos = document.createElement('img');



function addElements() {
    fogos.setAttribute('src', '/anim.gif');
    fogos.setAttribute('id', 'fogos');
    body.appendChild(main);
    py_img.setAttribute('src', './python.png');
    form.setAttribute('onsubmit', 'send(event)');
    form.appendChild(fogos);
    form.appendChild(py_img);
    main.appendChild(form);
    form.appendChild(input1);
    
    input1.setAttribute('placeholder', 'Nome');

    console.log('foi');
}

function send(event) {
    console.log('SEND');
    form.appendChild(input_valor);
    input_valor.innerHTML = input1.value;
    input1.value = '';
    
    
    event.preventDefault();
}

addElements();
