/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // Step 1: Build adjacency list for the graph
    const adjacencyList = new Map();
    for (const [u, v] of edges) {
        if (!adjacencyList.has(u)) adjacencyList.set(u, []);
        if (!adjacencyList.has(v)) adjacencyList.set(v, []);
        adjacencyList.get(u).push(v);
        adjacencyList.get(v).push(u); // Since the graph is undirected
    }
    
    // Step 2: Initialize graph traversal (BFS)
    const queue = [source];
    const visited = new Set();
    visited.add(source);
    
    // Step 3: Perform BFS traversal to find a path from source to destination
    while (queue.length > 0) {
        const currentNode = queue.shift();
        
        // If current node is the destination, return true
        if (currentNode === destination) {
            return true;
        }
        
        // Explore neighbors of the current node
        if (adjacencyList.has(currentNode)) {
            for (const neighbor of adjacencyList.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
    
    // If destination is not reached, return false
    return false;
};

};
