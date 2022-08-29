let numbers = [];

for(let index = 0; index < 25; index++){
    numbers.push(index + 1)
}
console.log(numbers) 

for(let index2 = 0; index2 < numbers.length; index2++){
    console.log(numbers[index2] / 2);
}