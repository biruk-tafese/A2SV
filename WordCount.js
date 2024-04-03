/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Right, Left, Down, Up

    const dfs = (row, col, index) => {
        // If the index reaches the length of the word, we found the word
        if (index === word.length) {
            return true;
        }
        
        // Check if the current cell is out of bounds or doesn't match the current character of the word
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) {
            return false;
        }
        
        // Mark the current cell as visited
        const temp = board[row][col];
        board[row][col] = '#';
        
        // Explore all four directions from the current cell
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (dfs(newRow, newCol, index + 1)) {
                return true;
            }
        }
        
        // Unmark the current cell before backtracking
        board[row][col] = temp;
        
        return false;
    };

    // Iterate through each cell on the board to start the DFS
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
                return true; // If the word is found, return true
            }
        }
    }
    
    return false; // If the word is not found after searching all cells, return false
};
