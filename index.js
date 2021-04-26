// Add your functions here

function map(src, callb) {
  let r = [];
  for (let i = 0; i < src.length; i++) {
    let theElement = src[i];
    r.push(callb(theElement));
  }
  return r
}

function reduce(src, callb, strtValue) {
  let total;
  if (strtValue) {
    total = strtValue;
    for (let i = 0; i < src.length; i++) {
      total = callb(src[i], total);
    }
    return total;
  } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callb(src[i], total);
      }
      return total;
  }
}