/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
     
    let orderIndices = new Map();

     for (let i = 0; i < order.length; i++) {
        orderIndices.set(order[i], i);
    }

    // Define a custom comparator function to sort characters based on their order indices
    const compareChars = (char1, char2) => {
        const index1 = orderIndices.has(char1) ? orderIndices.get(char1) : Infinity;
        const index2 = orderIndices.has(char2) ? orderIndices.get(char2) : Infinity;
        return index1 - index2;
    };

    // Sort the characters of s based on their order indices
    const sortedS = s.split('').sort(compareChars);


    // Join the sorted characters to form the permuted string
    return sortedS.join('');

    
};
