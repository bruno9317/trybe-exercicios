let a = 60;
let b = 60;
let c = 60;

if(a < 0){
    console.log('Angulo "a" é inválido')
}else if(b < 0){
    console.log('Angulo "b" é inválido')
}else if(c < 0){
    console.log('Angulo "c" é inválido')
}

let resultado;
resultado = a + b + c;

if(resultado === 180){
    console.log(true)
}else{
    console.log(false)
}