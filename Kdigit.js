/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    
    for (let i = 0; i < num.length; i++) {
        const digit = num[i];
        
        // Remove digits from stack while maintaining the smallest number
        while (k > 0 && stack.length > 0 && digit < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        
        stack.push(digit);
    }
    
    // If k > 0, remove remaining digits from the end of the stack
    while (k > 0 && stack.length > 0) {
        stack.pop();
        k--;
    }
    
    // Construct the result from the stack
    let result = stack.join('');
    
    // Remove leading zeroes (except for the case where the result is "0")
    while (result.length > 1 && result[0] === '0') {
        result = result.slice(1);
    }
    
    // If the result is empty, return "0"
    return result === '' ? '0' : result;
};
