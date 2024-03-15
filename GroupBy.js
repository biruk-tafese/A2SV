Array.prototype.groupBy = function(fn) {
  const groupedArray = {};

  this.forEach(item => {
    const key = fn(item);
    if (groupedArray[key] === undefined) {
      groupedArray[key] = [];
    }
    groupedArray[key].push(item);
  });

  return groupedArray;
};
