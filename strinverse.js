let str = "krish bhuva"

function stringInverse(str){
    let newStr = ""
    for(let i = str.length -1 ; i >= 0 ; i--){
        newStr = newStr + str[i]
    }
    return newStr
}

console.log(stringInverse(str));
    