let str = "krish bhuva"

function reverseString(str) {
    let newStr = "" // moved inside function to avoid global variable
    for(let i = str.length - 1; i >= 0; i--) { // changed i++ to i--
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString(str));