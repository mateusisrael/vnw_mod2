let saida = document.querySelector('#saida');
let form = document.querySelector('#form');
let input = document.createElement('input');



saida.addEventListener('mouseover', () => {
    saida.style = 'color: red;'
});

saida.addEventListener('mouseout', () => {
    saida.style = 'color: black;'
})



function go(event) {
    event.preventDefault();
    saida.innerHTML = input.value;
    input.value = '';

}


function paginaCarregada() {
    console.log('Hello');
    form.appendChild(input);
}


paginaCarregada();