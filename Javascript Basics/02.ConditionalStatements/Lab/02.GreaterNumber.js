function greaterNumber(input) {
  const numFirst = Number(input[0]);
  const numSecond = Number(input[1]);

  if (numFirst > numSecond) {
    console.log(numFirst);
  } else {
    console.log(numSecond);
  }
}

greaterNumber(['3', '5']);
