const a = 10;
const b = 20;
const c = 30;

if(a > b && a>c){
    console.log(a);
}else if(b > a && b>c){
    console.log(b);
}else if(c > a && c > b){
    console.log(c);
}else{
    console.log('Os dois valores são iguais');
}