// Mateus Israel, 23 de setembro de 2019.


// window.onload = alert("Hello World");
let hello = document.querySelector('#hello-section');
let colors = ["white", "#ff7043"];
let selected_color = colors[0];
let menu = document.querySelector("#menu");
let menu_estado = 'aberto';


menu.addEventListener("click", () => {

    if(menu_estado == 'aberto') {
        menu.style.display = 'none';
        menu_estado = "fechado";

    }
});


hello.addEventListener("click", () => {
    if(menu_estado = "fechado") {
        menu.style.display = 'block';
        menu_estado = "aberto";
    }

});



// hello.addEventListener("click", () => {
//     if(selected_color == colors[0]) {
//         selected_color = colors[1];
//         console.log("Clicado ", selected_color);
//         mudarCor(selected_color);

//     } else if(selected_color == colors[1]) {
//         selected_color = colors[0];
//         console.log("Clicado ", selected_color);
//         mudarCor(selected_color);

//     }

// });


// function mudarCor(cor) {
//     hello.style.color = cor;
// }
