
function lastIndexOf(...args) {
  const searchElement = args[0];
  const list = args[1];
  if(list instanceof Array) {
    return list.lastIndexOf(searchElement);
  }
  return -1;
}

export {
  lastIndexOf,
};
