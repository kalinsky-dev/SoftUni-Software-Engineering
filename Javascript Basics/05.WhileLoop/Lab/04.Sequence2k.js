function sequence2k(input) {
  const num = Number(input[0]);

  let currNum = 1;

  while (currNum <= num) {
    console.log(`${currNum}`);
    currNum = 2 * currNum + 1;
  }
}

sequence2k(['31']);
