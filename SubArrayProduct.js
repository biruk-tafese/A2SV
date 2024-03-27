/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    
     // Handle edge cases where k is 0 (no subarray possible)
     if(k <= 1) return 0;

     let totalCount = 0;
     let product = 1;

     // Use two pointer to maintain a sliding window
     for(let right = 0,  left =0; right < nums.length; right++) {
             // Expan the window by including the element at the right pointer
             product *= nums[right];

             //Shrink the window from the left while the product is greater than or equal to k
             while(product >= k) {
                // Remove the element at the left pointer from the product

                product /= nums[left++];

             }

             // Update the total count by adding the number of the valid subarray with current window size
             totalCount += right - left + 1; // right - left + 1 represents the current window size

     } 

     return totalCount;
};
