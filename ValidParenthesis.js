/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (let char of s) {
        if (char === '(') {
            minOpen++;
            maxOpen++;
        } else if (char === ')') {
            minOpen = Math.max(minOpen - 1, 0);
            maxOpen--;
        } else if (char === '*') {
            minOpen = Math.max(minOpen - 1, 0);
            maxOpen++;
        }
        
        // If maxOpen becomes negative, it means ')' is unmatched
        if (maxOpen < 0) {
            return false;
        }
    }

    // The string is valid if all '(' are matched by ')'
    return minOpen === 0;
};

// Example usage:
console.log(checkValidString("()"));    // Output: true
console.log(checkValidString("(*)"));   // Output: true
console.log(checkValidString("(*))"));  // Output: true
