function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += this.key.length;
    }
  }
  // Change code above this line
  return propCount;
}
