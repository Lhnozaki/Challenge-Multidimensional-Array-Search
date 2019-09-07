function locate(array, target) {
  // do work here
  let arr = [];

  let pushIntoArr = element => {
    element.forEach(e => {
      if (typeof e == "object") {
        pushIntoArr(e);
        return;
      } else {
        arr.push(e);
      }
    });
    return arr;
  };
  return pushIntoArr(array).includes(target);
}

module.exports = locate;
