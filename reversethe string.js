let string1 = "krish bhuva"

function reverse (str){
    let newString = ""
    for(let i = str.length - 1 ; i >= 0 ; i--){
        newString += str[i]
    }
    return newString
}

console.log(reverse(string1));
//output avuhb hsirk



let string = "          my    name    is    krish                    bhuva    "
string = string.trim().split(" ").filter(word => word !== "");
console.log(string); 
//[ 'my', 'name', 'is', 'krish', 'bhuva' ]


let newString = ""

for(let i = string.length - 1 ; i >= 0 ; i--){
    newString += string[i] + " "
}
newString = newString.trim()
console.log(newString);
//output bhuva krish is name my

