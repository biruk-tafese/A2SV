/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const m = land.length;
    const n = land[0].length;
    const result = [];
    
    const explore = (startRow, startCol) => {
        let endRow = startRow;
        let endCol = startCol;
        
        const stack = [[startRow, startCol]];
        land[startRow][startCol] = 0; // Mark as visited
        
        while (stack.length > 0) {
            const [row, col] = stack.pop();
            
            // Update endRow and endCol to expand the bounding box
            endRow = Math.max(endRow, row);
            endCol = Math.max(endCol, col);
            
            // Explore neighbors (up, down, left, right)
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && land[newRow][newCol] === 1) {
                    land[newRow][newCol] = 0; // Mark as visited
                    stack.push([newRow, newCol]);
                }
            }
        }
        
        return [startRow, startCol, endRow, endCol];
    };
    
    // Iterate through each cell in the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1) {
                // Found a new group of farmland
                const [startRow, startCol, endRow, endCol] = explore(i, j);
                result.push([startRow, startCol, endRow, endCol]);
            }
        }
    }
    
    return result;
};
