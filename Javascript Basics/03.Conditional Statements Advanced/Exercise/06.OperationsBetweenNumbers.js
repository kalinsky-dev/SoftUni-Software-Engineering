function operationsBetNumbers(input) {
  // •	Оператор – един символ измежду: "+", "-", "*", "/", "%"

  const numOne = Number(input[0]);
  const numTwo = Number(input[1]);
  const symbol = input[2];
  let evenOdd = 'odd';
  let result = 0;

  switch (symbol) {
    case '+':
      result = numOne + numTwo;
      if (result % 2 === 0) {
        evenOdd = 'even';
      }
      console.log(`${numOne} ${symbol} ${numTwo} = ${result} - ${evenOdd}`);
      break;
    case '-':
      result = numOne - numTwo;
      if (result % 2 === 0) {
        evenOdd = 'even';
      }
      console.log(`${numOne} ${symbol} ${numTwo} = ${result} - ${evenOdd}`);
      break;
    case '*':
      result = numOne * numTwo;
      if (result % 2 === 0) {
        evenOdd = 'even';
      }
      console.log(`${numOne} ${symbol} ${numTwo} = ${result} - ${evenOdd}`);
      break;
    case '/':
      if (numTwo === 0) {
        console.log(`Cannot divide ${numOne} by zero`);
      } else {
        result = numOne / numTwo;
        console.log(`${numOne} / ${numTwo} = ${result.toFixed(2)}`);
      }
      break;
    case '%':
      if (numTwo === 0) {
        console.log(`Cannot divide ${numOne} by zero`);
      } else {
        result = numOne % numTwo;
        console.log(`${numOne} % ${numTwo} = ${result}`);
      }
      break;
  }
}

operationsBetNumbers(['10', '0', '%']);
