/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const n = deck.length;
    deck.sort((a, b) => a - b); // Sort the deck in ascending order
    
    // Initialize a queue with indices from 0 to n-1
    const queue = [...Array(n).keys()];
    const result = [];
    let current = 0;
    
    while (queue.length > 0) {
        // Take the front index of the queue
        const front = queue.shift();
        // Add the current card to the result
        result[front] = deck[current++];
        // If there are still indices in the queue, move the next index to the back
        if (queue.length > 0) {
            queue.push(queue.shift());
        }
    }
    
    return result;
};

// Example usage:
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])); // Output: [2,13,3,11,5,17,7]
console.log(deckRevealedIncreasing([1,1000])); // Output: [1,1000]
