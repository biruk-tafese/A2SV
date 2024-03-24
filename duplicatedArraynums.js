/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   /*
     Floyd's Tortoise and Hare algorithm, also known as cycle detection algorithm
    */
    let tortoise = nums[0];
    let hare = nums[0];

    // Phase 1: Find the intersetion point of the two pointers
    do {
         tortoise = nums[tortoise];
         hare = nums[nums[hare]];

    }while(tortoise !== hare);

    // Phase 2: Find the entrance of the cycle.

    tortoise = nums[0];

    while(tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return tortoise;

};
