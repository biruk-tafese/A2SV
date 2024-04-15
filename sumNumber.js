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
var sumNumbers = function(root) {
    
       // Helper function for DFS traversal
    const dfs = (node, currentPathNum) => {
         if(!node) {
            return 0;
         }

      // Update current path number by appending current node's value

      const updatedPathNum = currentPathNum * 10 + node.val;

      // If it's a leaf node, return the current path number

      if(!node.left && !node.right) {
       
        return updatedPathNum;
      }


      // Recurse on left and right children
      const leftSum = dfs(node.left, updatedPathNum);
      const rightSum = dfs(node.right, updatedPathNum);

      //Return sum of left and right subtrees
      return leftSum + rightSum;
    }
 
  // Start DFS from the root with initial path number 0
  return dfs(root, 0);
};
