/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // Single node case
    
    // Create adjacency list for the graph
    const adjList = new Array(n).fill(0).map(() => []);
    const degree = new Array(n).fill(0);
    
    // Populate the adjacency list and calculate degrees
    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
        degree[u]++;
        degree[v]++;
    }
    
    // Initialize the list of leaf nodes
    const leaves = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            leaves.push(i);
        }
    }
    
    let remainingNodes = n;
    
    // Remove leaves iteratively until we have one or two nodes remaining
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves = [];
        
        for (let leaf of leaves) {
            for (let neighbor of adjList[leaf]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    newLeaves.push(neighbor);
                }
            }
        }
        
        leaves.length = 0;
        leaves.push(...newLeaves);
    }
    
    return leaves;
};
