/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // Step 1: Calculate the bitwise XOR of all elements of nums
    let totalXOR = nums.reduce((acc, num) => acc ^ num, 0);
    
    // Step 2: Check if the XOR value is already equal to k
    if (totalXOR === k) return 0;
    
    // Step 3: Count the number of different bits between totalXOR and k
    let diffBits = totalXOR ^ k;
    
    // Step 4: Count the number of set bits in diffBits
    let operations = 0;
    while (diffBits) {
        operations += diffBits & 1;
        diffBits >>= 1;
    }
    
    return operations;
};
