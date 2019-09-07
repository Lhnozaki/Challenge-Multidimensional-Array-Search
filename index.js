function locate(array, target) {
  // do work here
  return array
    .join("")
    .split("")
    .includes(target);
}

module.exports = locate;
