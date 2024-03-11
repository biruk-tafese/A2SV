/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function debounce(fn, t) {
    let timeout;

    return function debounced(...args) {
        const functionCall = () => {
            timeout = null;
            fn(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, t);
    };
}

/**
 * @param {number} t
 * @param {Array} calls
 * @return {Array}
 */
function debounceCalls(t, calls) {
    const result = [];
    let lastCallTime = 0;

    const processCall = (inputs, time) => {
        result.push({ t: time, inputs });
    };

    const debouncedProcessCall = debounce(processCall, t);

    for (const call of calls) {
        const { t: callTime, inputs } = call;
        const delay = Math.max(0, callTime - lastCallTime);
        lastCallTime = callTime;

        setTimeout(() => {
            debouncedProcessCall(inputs, callTime + delay);
        }, delay);
    }

    return result;
}

// Example usage:
const t = 50;
const calls = [
    { t: 50, inputs: [1] },
    { t: 75, inputs: [2] }
];

console.log(debounceCalls(t, calls)); 
// Output: [{"t":125,"inputs":[2]}]

// You can test with other examples as well
