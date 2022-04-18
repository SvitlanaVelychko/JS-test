function filterArray(numbers, value) {
  // Change code below this line
  for (const number of numbers) {
    if (number < value) {
      numbers.push(number);
    }

    return numbers;
    // Change code above this line
  }
}

console.log(filterArray([1, 2, 3, 4, 5], 3));