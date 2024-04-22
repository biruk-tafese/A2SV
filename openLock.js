/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const initialLock = "0000";
    const deadendSet = new Set(deadends);
    const visited = new Set();
    const queue = [initialLock];
    visited.add(initialLock);
    
    let moves = 0;
    
    while (queue.length > 0) {
        const queueSize = queue.length;
        
        for (let i = 0; i < queueSize; i++) {
            const currentLock = queue.shift();
            
            if (currentLock === target) {
                return moves;
            }
            
            if (deadendSet.has(currentLock)) {
                continue;
            }
            
            // Generate next states by rotating each wheel
            for (let j = 0; j < 4; j++) {
                for (let delta of [-1, 1]) {
                    const nextLock = rotateWheel(currentLock, j, delta);
                    
                    if (!visited.has(nextLock)) {
                        visited.add(nextLock);
                        queue.push(nextLock);
                    }
                }
            }
        }
        
        moves++;
    }
    
    return -1; // If we exhaust all possibilities without finding the target
};

// Helper function to rotate a single wheel in the lock
function rotateWheel(lock, wheelIdx, delta) {
    const lockArray = lock.split('');
    const currentDigit = parseInt(lockArray[wheelIdx]);
    const nextDigit = (currentDigit + delta + 10) % 10; // Handle wrapping around
    
    lockArray[wheelIdx] = String(nextDigit);
    return lockArray.join('');
}
