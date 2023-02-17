function evenPowersOf2(input) {
  const num = Number(input[0]);
  let numToPrint = 0;

  for (let i = 0; i <= num; i += 2) {
    numToPrint = Math.pow(2, i);
    console.log(numToPrint);
  }
}

evenPowersOf2(['4']);
