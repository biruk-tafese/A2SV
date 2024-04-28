/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const graph = new Array(n).fill(0).map(() => []);
    const count = new Array(n).fill(1);
    const res = new Array(n).fill(0);
    
    // Build the adjacency list representation of the tree
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // DFS to calculate count and res
    const dfsCount = (node, parent) => {
        for (const child of graph[node]) {
            if (child !== parent) {
                dfsCount(child, node);
                count[node] += count[child];
                res[node] += res[child] + count[child];
            }
        }
    };
    
    // DFS to update res
    const dfsRes = (node, parent) => {
        for (const child of graph[node]) {
            if (child !== parent) {
                res[child] = res[node] - count[child] + (n - count[child]);
                dfsRes(child, node);
            }
        }
    };
    
    dfsCount(0, -1);
    dfsRes(0, -1);
    
    return res;
};
