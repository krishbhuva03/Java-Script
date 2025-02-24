// let string = "krish bhuva"

// function reverse (str){
//     let newString = ""
//     for(let i = str.length - 1 ; i >= 0 ; i--){
//         newString += str[i]
//     }
//     return newString
// }

// console.log(reverse(string));

let string = "          my    name    is    krish                    bhuva    "
string = string.trim().split(" ").filter(word => word !== "");
console.log(string); 


let newString = ""

for(let i = string.length - 1 ; i >= 0 ; i--){
    newString += string[i] + " "
}
newString = newString.trim()
console.log(newString);
