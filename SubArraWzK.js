/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const n = nums.length;
    let left1 = 0, left2 = 0;
    let count1 = 0, count2 = 0;
    let result = 0;
    const freq1 = new Array(n + 1).fill(0);
    const freq2 = new Array(n + 1).fill(0);

    for (let right = 0; right < n; right++) {
        if (freq1[nums[right]] === 0) count1++;
        if (freq2[nums[right]] === 0) count2++;
        freq1[nums[right]]++;
        freq2[nums[right]]++;

        while (count1 > k) {
            freq1[nums[left1]]--;
            if (freq1[nums[left1]] === 0) count1--;
            left1++;
        }

        while (count2 > k - 1) {
            freq2[nums[left2]]--;
            if (freq2[nums[left2]] === 0) count2--;
            left2++;
        }

        result += left2 - left1;
    }

    return result;
};





