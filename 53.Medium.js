//====================================O(n^3)====================================

// let arr = [1]
// let result = 0
// let max = -Infinity

// for(let i = 0 ; i < arr.length ; i++){
//     for(let j = i ; j < arr.length ; j++){
//         let sum = 0 
//         for(let k = i ; k <= j ; k++){
//             sum += arr[k]
//             max = Math.max(max,sum)
//         }
//     }
// }

// console.log(max);



//====================================more optimized =============================

// let arr = [5,4,-1,7,8]
// let result = 0
// let max = -Infinity

// for(let i = 0 ; i < arr.length ; i++){
//     let sum = 0 
//     for(let j = i ; j < arr.length ; j++){
//         sum += arr[j]
//         max = Math.max(max,sum)
//     }
// }

// console.log(max);


//====================================O(n)====================================


let arr = [-2,1,-3,4,-1,2,1,-5,4]
let result = 0
let max = -Infinity

for(let i = 0 ; i < arr.length ; i++){
    for(let j = i ; j < arr.length ; j++){
        let sum = 0 
        for(let k = i ; k <= j ; k++){
            sum += arr[k]
            max = Math.max(max,sum)
        }
    }
}
return max;