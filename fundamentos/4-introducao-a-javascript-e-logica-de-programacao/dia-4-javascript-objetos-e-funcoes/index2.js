<<<<<<< HEAD
=======
let teste = [2, 3, 2, 5, 8, 2, 3];

>>>>>>> exercicios/4.4
function maisRepetido(array){
    let contador = 0;
    let maiorRepetição = 0;
    for(let index = 0; index < array.length; index += 1){
        for(let index2 = 0; index2 < array.length; index2 += 1){
            if(array[index] === array[index2]){
                contador = contador + 1;
            }
        }
        if(maiorRepetição < contador){
            maiorRepetição = array[index];
            contador = 0;
        }else{
            contador = 0;
        }

    }   
    return maiorRepetição;
<<<<<<< HEAD
}
=======
}

console.log(maisRepetido(teste));
>>>>>>> exercicios/4.4
