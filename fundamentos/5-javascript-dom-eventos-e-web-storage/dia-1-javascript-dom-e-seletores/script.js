function alteraCorDeFundo(elemento, alteração){
    document.querySelector(elemento).style.backgroundColor = alteração;
}

function alteraCorDeFundo2(elemento, alteração){
    document.getElementsByTagName(elemento).style.backgroundColor = alteração;
}

alteraCorDeFundo('#header-container', 'green');
alteraCorDeFundo('#footer-container', 'green');
alteraCorDeFundo('.emergency-tasks', 'coral');
alteraCorDeFundo('.no-emergency-tasks', 'yellow');
alteraCorDeFundo('#h31', 'purple');
alteraCorDeFundo('#h32', 'purple');
alteraCorDeFundo('#h33', 'black');
alteraCorDeFundo('#h34', 'black');







