function sumOfNumbers(input) {
  const num = String(input[0]);
  const length = num.length;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += Number(num[i]);
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(['1234']);
