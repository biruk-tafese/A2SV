/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    // Define a recursive helper function
    const dfs = (node, isLeft) => {
        // Base case: if node is null, return 0
        if (!node) {
            return 0;
        }
        
        // Check if the current node is a leaf and a left child
        if (!node.left && !node.right && isLeft) {
            return node.val;
        }
        
        // Recursively calculate sum of left leaves for left and right subtrees
        const leftSum = dfs(node.left, true);  // Pass true to indicate it's a left child
        const rightSum = dfs(node.right, false); // Pass false to indicate it's not a left child
        
        return leftSum + rightSum;
    };
    
    // Start recursion from the root node with isLeft = false
    return dfs(root, false);
};
