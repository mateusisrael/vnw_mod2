window.onload = console.log("Hello");



function somar(i) {
    let val1 = document.querySelector('#input1');
    let val2 = document.querySelector('#input2');
    let somar = document.querySelector('#somar');
    let result = document.querySelector('#result');
    i.preventDefault();
    console.log(parseInt(val1.value) + parseInt(val2.value));
    result.innerHTML = parseInt(val1.value) + parseInt(val2.value);

}
