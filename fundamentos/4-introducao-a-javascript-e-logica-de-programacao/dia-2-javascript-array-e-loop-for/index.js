let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeImpar = 0;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index] % 2 != 0){
        quantidadeImpar = quantidadeImpar +1;
    }
}
if(quantidadeImpar > 0){
    console.log('Quantidade de valores impares =', quantidadeImpar);
}else{
    console.log('nenhum valor ímpar encontrado');
}