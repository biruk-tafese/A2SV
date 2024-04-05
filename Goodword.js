/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];

    for (let char of s) {
        const prevChar = stack.length ? stack[stack.length - 1] : '';

        if (char.toLowerCase() === prevChar.toLowerCase() && char !== prevChar) {
            stack.pop(); // Remove the previous character from the stack
        } else {
            stack.push(char); // Push the current character onto the stack
        }
    }

    return stack.join('');
};

// Example usage:
console.log(makeGood("leEeetcode")); // Output: "leetcode"
console.log(makeGood("abBAcC")); // Output: ""
console.log(makeGood("s")); // Output: "s"
