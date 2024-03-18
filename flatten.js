/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    function flattenHelper(arr, depth) {
        let flatArr = [];
        for (let elem of arr) {
            if (Array.isArray(elem) && depth < n) {
                flatArr.push(...flattenHelper(elem, depth + 1));
            } else {
                flatArr.push(elem);
            }
        }
        return flatArr;
    }

    return flattenHelper(arr, 0);
};  
