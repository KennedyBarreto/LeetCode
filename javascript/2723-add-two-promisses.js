/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve, reject) => {
    Promise.all([promise1, promise2])
      .then((values) => {
        const sum = values.reduce((acc, current) => acc + current, 0);
        resolve(sum);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
