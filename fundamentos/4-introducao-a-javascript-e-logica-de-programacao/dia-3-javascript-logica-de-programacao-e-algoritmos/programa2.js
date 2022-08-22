let word = 'tryber';
let wordR = [];

for(let index = 0; index < word.length; index ++){
    wordR.push(word[word.length - 1 - index])
}
console.log(wordR);