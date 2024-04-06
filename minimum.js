/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const openIndices = [];
    const result = s.split(''); // Convert string to array of characters

    // First pass: Find unmatched opening and closing parentheses
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '(') {
            openIndices.push(i);
        } else if (result[i] === ')') {
            if (openIndices.length > 0) {
                openIndices.pop(); // Match found, remove from stack
            } else {
                result[i] = null; // Mark invalid closing parenthesis
            }
        }
    }

    // Second pass: Mark unmatched opening parentheses
    while (openIndices.length > 0) {
        result[openIndices.pop()] = null;
    }

    // Construct the final valid string
    return result.filter(char => char !== null).join('');
};

// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))((")); // Output: ""
