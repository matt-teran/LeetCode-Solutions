/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b)
    if ((arr.length - 1) % 2 === 1) {
        // console.log(Math.ceil((arr.length - 1) / 2))
        return (arr[Math.floor((arr.length - 1) / 2)] + arr[Math.ceil((arr.length - 1) / 2)]) / 2
    } else {
        return arr[(arr.length - 1) / 2]   
    }
};