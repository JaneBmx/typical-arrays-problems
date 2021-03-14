exports.min = function min (array) {
  if(array === null || array === undefined || array.length === 0){
    return 0;
  }

  return array.reduce((val, acc) => acc = acc < val ? acc : val, Infinity);
}

exports.max = function max (array) {
  if(array === null || array === undefined || array.length === 0){
    return 0;
  }

  return array.reduce((val, acc) => acc = acc > val ? acc : val, -Infinity);
}

exports.avg = function avg (array) {
  if(array === null || array === undefined || array.length === 0){
    return 0;
  }

  return array.reduce((val, acc) => acc += val, 0) / array.length;
}
