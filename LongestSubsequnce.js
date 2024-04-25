/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    const n = s.length;
    const alphaToOrder = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

    // Map to track the maximum length of valid subsequences ending at each character position
    const maxLengthEndingHere = new Array(n).fill(1);

    // Use a hashmap to track the latest valid length ending with each alphabet order difference
    const lastValidLength = new Map();

    // Initialize the maximum length of ideal subsequence
    let maxLength = 1;

    // Iterate over each character in the string
    for (let i = 0; i < n; i++) {
        const currentOrder = alphaToOrder(s[i]);

        // Check for valid alphabet order differences within the range [currentOrder - k, currentOrder + k]
        for (let diff = -k; diff <= k; diff++) {
            const prevOrder = currentOrder - diff;

            if (lastValidLength.has(prevOrder)) {
                maxLengthEndingHere[i] = Math.max(maxLengthEndingHere[i], lastValidLength.get(prevOrder) + 1);
            }
        }

        // Update the hashmap with the latest valid length ending at current alphabet order
        lastValidLength.set(currentOrder, maxLengthEndingHere[i]);

        // Update the maximum length of ideal subsequence found so far
        maxLength = Math.max(maxLength, maxLengthEndingHere[i]);
    }

    return maxLength;
};



