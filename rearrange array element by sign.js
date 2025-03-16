// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

 

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// // So nums is rearranged to [1,-1].
 

// let array = [3,1,-2,-5,2,-4]
// let positive = []
// let negative = []

// function rearrangeArray (elements){
//     for(let i = 0 ; i <= elements.length -1 ; i++){
//         if(elements[i]>0){
//             positive.push(elements[i])
//         }if(elements[i]<0){
//             negative.push(elements[i])
//         }
        
//     }console.log(positive , negative);
// }
// rearrangeArray(array)

// let newArray = [...positive , ...negative]
// console.log(newArray);

// function arrange (newArr){
//     let finalArr =[]
//     let midVal = newArr.length / 2
//     for(let i = 0 ; i <= newArr.length -1 ; i++){
//         for(let j = midVal ; i <= newArr.length -1 ; j++){
//             finalArr.push(newArr[i++])
//             finalArr.push(newArr[j])
//         }
//     }
//     console.log(finalArr);
// }
// arrange(newArray)

let nums = [3,1,-2,-5,2,-4]


function reArrangeElement(arr){
    const positive = arr.filter(nums => nums >0)
    const negative = arr.filter(nums => nums <0)

    let finalArr = []
    for(let i = 0 ; i  <= positive.length - 1; i++){
        finalArr.push(positive[i])
        finalArr.push(negative[i])
    }
    console.log(finalArr);
}

reArrangeElement(nums)