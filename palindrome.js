let str = "1234554321"
str = str.toLowerCase()

let newString = str.split("").reverse().join("")

console.log(newString); 


str === newString 
    ? console.log("Palindrome")
    : console.log("Not a Palindrome")
    