function numbersDivisibleBy9(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  let sum = 0;
  let result = '';

  for (let i = num1; i <= num2; i++) {
    if (i % 9 === 0) {
      sum += i;
      result += `${i}\n`;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(result);
}

numbersDivisibleBy9(['100', '200']);
