//question 1
// function abc (){
//     console.log(abc.xyz);
// }

// abc()
// abc.xyz = 400
// abc.xyz = 200
// abc()

//question2
// const number = [1,2,3,4]
// number[10]=500
// console.log(number);


// //question 3
// console.log(typeof typeof 100);

//question 4

// const arr =[..."krish"]
// console.log(arr);

// //question 5
// console.log(parseInt("10+2"));
// console.log(parseInt("7FM"));
// console.log(parseInt("f7f"));


// const Math = {
//     value: 3.14,
//     writable: true,
//     enumerable: true,
//     configurable: true,
// }


// Object.defineProperty(Math,"PI",{
//     value: 4,
//     writable: true,
//     enumerable: false,
//     configurable: false,
// })

// console.log(Math.PI);


// const target = 17

// for(let i = 0 ; i < arr.length; i++){
//     for(let j = i + 1 ; j  < arr.length; j++){
//         if (arr[i] + arr[j] === target) {
//             console.log(`your first element is ${i} and your second element is ${j}`);
//             break
//         }
//     }
// } 

// const arr = [0,0,1,1,1,2,2,3,4,4,4,4,4,5,5,5,5,6,6,7,8,9,] 

// let i = 0

// for(let j = 0 ; j < arr.length ; j++){
//     if(arr[i]!=arr[j]){
//         i++
//         arr[i] = arr[j]
//     }
    
// }
// console.log(arr);


// const nums = [1, 3, 5, 6];
// const target = 2;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         console.log(i); // Target found
//         break;
//     } else if (nums[i] > target) {
//         console.log(i); // Target should be inserted here
//         break;
//     }
// }

// // If the loop completes, the target is greater than all elements, so insert at the end
// if (nums[nums.length - 1] < target) {
//     console.log(nums.length);
// }


// const arr = [9];

// let length = arr.length;

// if (length > 0) {
//     arr[length - 1] = arr[length - 1] + 1; // Increment the last element
    
    
//     // Handle carry
//     while ( >= 10) {
//         arr[length - 1] = newNum % 10; // Set the current position to the last digit
//         newNum = Math.floor(newNum / 10); // Calculate the carry (remaining number)
//         length -= 1; // Move to the previous index
        
//         if (length > 0) {
//             arr[length - 1] += newNum; // Add carry to the previous digit
//             newNum = arr[length - 1];
//         } else {
//             arr.unshift(newNum); // If no more digits, add carry to the beginning
//             break;
//         }
//     }
// }

// console.log(arr);



// let arr = [1,9]

// for (let i = arr.length - 1 ; i >= 0 ; i--){
//     if(arr[i] === 9){
//         arr[i] = 0
//     }else{
//         arr[i]++  
//         return arr
            
//     }
// }
// arr.unshift(1)

// console.log(arr);


// console.log("1"+"1");
// console.log("1"-"1");


function swapElements(arr, index1, index2) {
    // Check if indices are valid
    if (index1 < 0 || index2 < 0 || index1 >= arr.length || index2 >= arr.length) {
        console.error("Invalid indices");
        return;
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

let arr = ["M","A","D","A","M"];

for (let i = 0; i < arr.length; i++) {
    if(i < Math.floor(arr.length/2)){
        swapElements(arr, i, arr.length - i - 1);
    }
}


for(let i = 0 ; i < arr.length; i++){
    if(i<Math.floor(arr.length/2)){
        if(i===arr.length-i-1){
            i++
            console.log(`arr is plandrom`);
            
        }else{
            console.log("elements are not palindrom");
            
        }
    }
}


