/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const n = nums.length;
    const freq  = {}; //Map to store the freguency of elements
    let ans = 0;
    let i =0; j = 0;
   

       while(j < n) {

           freq[nums[j]] = (freq[nums[j]] || 0) + 1;
           while(freq[nums[j]] > k){
            freq[nums[i]]--;
            i++;
           }

           ans = Math.max(ans, j-i+1);
           j++;
       }

    return ans;
};
