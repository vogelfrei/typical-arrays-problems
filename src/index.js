
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) return 0;
  let minV = array[0];
  array.filter((item) => {
    return item < minV ? minV = item : 0;
  }
  );
  return minV;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0) return 0;
  let maxV = array[0];
  array.filter((item) => {
    return item > maxV ? maxV = item : 0;
  }
  );
  return maxV;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0) return 0;
  let sum = 0;
  array.map(item => sum += item);
  return array.length > 0 ? sum/array.length : 0;
}
