// MUDA A COR DO BACKGORUND

function recebeClick(){
    let local = document.body;
    local.style.backgroundColor = 'blue';
}
function click(recebeClickk, local){
let botao = local;
botao.addEventListener("click", recebeClickk);
}

click(recebeClick, document.getElementsByClassName("bgAmarelo")[0]);
// MUDA A COR DOS TEXTOS 

function recebeClick2(){
    let local = document.body;
   localStorage.setItem('cor', local.style.color = 'red');
}

let botao2 = document.body.children[2];
botao2.addEventListener("click", recebeClick2);

// MUDA O TAMANHO DA FONTE 

function recebeClick3(){
    let local = document.body;
    local.style.fontSize = '20px';
}

let botao3 = document.body.children[3];
botao3.addEventListener("click", recebeClick3);

// MUDA O ESPAÇAMENTO ENTRE AS LINHAS

function recebeClick4(){
    let local = document.body;
    local.style.lineHeight = 5;
}

let botao4 = document.body.children[4];
botao4.addEventListener("click", recebeClick4);



// ABRE COM AS PREFERENCIAS DO USUARIO

window.onload = function (){
    document.body.style.color = localStorage.getItem('cor');
}
