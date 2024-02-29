/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accum;
     
     for (let i=0; i < nums.length; i++) {
          
          if(nums.length == 0){
              accum =  init
          }

          init =  fn(init, nums[i]);
     }
      accum = init
     return accum;
};
