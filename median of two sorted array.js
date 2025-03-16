// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).


// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 


let nums1 = [1,2,3,4]
let nums2 = [5,6,7,8]

function median (arr1,arr2){
    let newNum = [...arr1,...arr2]
    newNum = newNum.sort((a,b)=> a-b)
    console.log(newNum);
    
    let mid 
    if(newNum.length % 2 !== 0){
        mid = newNum.length / 2
        console.log(mid);
        
    }else{
        mid = (newNum[Math.floor(newNum.length / 2) - 1] + newNum[Math.floor(newNum.length / 2)]) / 2;
        console.log(mid);
    }
}

median(nums1,nums2)