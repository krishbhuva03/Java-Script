let str = "aeroplane"

let vowels = ["a", "e", "i", "o", "u"]
let count = 0


for(let i = 0 ; i < str.length ; i++){
    let letter = str[i]
    if(vowels.includes(letter)){
        count++
    }
}

console.log(count);

let con = str.length - count 
