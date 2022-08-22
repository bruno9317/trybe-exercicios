let maiorPrimo = 0;
let primo = true;

for (let index = 2; index <= 50; index +=) {
    for (let index2 = 2; index2 <= index; index2 +=) {
        if(index % index2 === 0){
            primo = false;
        }
    }
    if(primo){
        maiorPrimo = index;
    }
}
console.log(maiorPrimo);