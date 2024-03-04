/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    const callCount = {};
    
    return function(...args) {
         const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      callCount[fn.name] = callCount[fn.name] || 0;
      return cache[key];
    } else {
      cache[key] = fn(...args);
      callCount[fn.name] = callCount[fn.name] ? callCount[fn.name] + 1 : 1;
      return cache[key];
    }
}

}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
