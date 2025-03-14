// let nums = [2,5,1,7,8]
// let target = 13


// function checkTwoSum (array, target){
//     array = array.sort((a,b)=> a-b)
//     for(let i = array.length -1 ; i >= 0 ; i--){
//         for(let j = 0; j <= i; j++){
//             if(array[i]+array[j] === target){
//                 console.log(array[i], array[j])
//             }if(array[i]+array[j] > target){
//                 i--
//             }if(array[i]+array[j] < target){
//                 j++
//             }
//         }
//     }
// }

// checkTwoSum(nums, target)


let nums = [2,5,1,7,8]
let target = 13

function checkTwoSum (array, target){
    for(let i = 0 ; i <= array.length;i++){
        for(let j = i+1; j<= array.length ; j++){
            if(array[i]+array[j]===target){
                console.log(array[i], array[j])
            }
        }
    }
}

checkTwoSum(nums,target)