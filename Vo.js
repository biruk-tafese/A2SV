/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b); // Sort the people array
    let left = 0, right = people.length - 1;
    let boats = 0;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; // Move the left pointer to the right
        }
        right--; // Move the right pointer to the left
        boats++; // Increment the boats count
    }
    
    return boats;
};
