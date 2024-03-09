/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            const execution = fn(...args);
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            execution.then(resolve).catch(reject);
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
