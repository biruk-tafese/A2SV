/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const n = ring.length;
    const m = key.length;
    
    // Initialize dp array
    const dp = [...Array(m + 1)].map(() => Array(n).fill(0));

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            // Initialize dp[i][j] with maximum value
            dp[i][j] = Infinity;
            
            // Iterate over all possible positions where ring[j] can align with key[i]
            for (let k = 0; k < n; k++) {
                if (ring[k] === key[i]) {
                    // Calculate steps needed to align ring[k] with key[i]
                    const diff = Math.abs(j - k);
                    const steps = Math.min(diff, n - diff);

                    // Update dp[i][j] with the minimum steps
                    dp[i][j] = Math.min(dp[i][j], steps + dp[i + 1][k]);
                }
            }
        }
    }

    // Minimum steps to spell the entire key
    return dp[0][0] + m;
};
