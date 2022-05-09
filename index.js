function sumItems(array) {
  let sum = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    }
    if (!Array.isArray(item)) {
      sum += item;
    }
  }
  return sum;
}

module.exports = sumItems;