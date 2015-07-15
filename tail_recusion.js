function sumInts(a, b) {
  if (a > b) {
    return 0;
  } else {
    return a + sumInts(a + 1, b);
  }
}

console.log("Sum of Integers: " + sumInts(1, 3))

function sumCubes(a, b) {
  if (a > b) {
    return 0;
  } else {
    return (a * a * a) + sumCubes(a + 1, b);
  }
}

console.log("Sum of cubes of Integers: " + sumCubes(1, 3))
