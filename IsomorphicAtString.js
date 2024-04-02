/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false; // Different lengths cannot be isomorphic
    }
    
    const sMap = new Map();
    const tMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        
        // Check if the mapping for sChar exists and if it's not mapped to the current tChar
        if ((sMap.has(sChar) && sMap.get(sChar) !== tChar) ||
            (tMap.has(tChar) && tMap.get(tChar) !== sChar)) {
            return false; // Mismatch in mapping
        }
        
        // Create mapping for sChar and tChar if it doesn't exist
        if (!sMap.has(sChar)) {
            sMap.set(sChar, tChar);
        }
        if (!tMap.has(tChar)) {
            tMap.set(tChar, sChar);
        }
    }
    
    return true;
};
