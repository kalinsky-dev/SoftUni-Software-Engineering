function multiplyBy2(input) {
  let num1 = Number(input[0]);
  let length = input.length;
  let numPo2 = 0;
  let i = 0;
  while (i < length) {
    if (num1 < 0) {
      console.log('Negative number!');
      break;
    }
    numPo2 = num1 * 2;
    console.log(`Result: ${numPo2.toFixed(2)}`);
    i++;
    num1 = Number(input[i]);
  }
}

multiplyBy2(['23.43', '12.3245', '0', '65.23432', '23', '65', '-12']);
