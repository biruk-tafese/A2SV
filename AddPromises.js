/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return new Promise((resolve, reject) => {
    Promise.all([promise1, promise2])
      .then((values) => {
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        resolve(sum);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
