/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {

        
    const timerId = setTimeout(function () {
        fn.apply(null, args);
    }, t);


    const cancelFn = function() {
        clearTimeout(timerId)
    }

    return cancelFn;

};
