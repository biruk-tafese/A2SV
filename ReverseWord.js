/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    if (index === -1) return word; // If ch does not exist in word, return word as it is
    
    const reversedSegment = word.slice(0, index + 1).split('').reverse().join(''); // Reverse the segment from index 0 to the index of the first occurrence of ch
    const remainingPart = word.slice(index + 1); // Get the remaining part of the word
    
    return reversedSegment + remainingPart; // Concatenate the reversed segment with the remaining part
};
