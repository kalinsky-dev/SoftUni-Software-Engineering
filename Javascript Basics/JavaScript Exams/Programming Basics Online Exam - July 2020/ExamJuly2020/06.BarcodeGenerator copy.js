function barcodeGenerator(input) {
  const numToStart = Number(input[0]);
  const numToStop = Number(input[1]);
  let stringNum = '';
  let result = '';
  let isEven = false;
  let currCharNum = '';
  let currNum = 0;

  for (let i = numToStart; i <= numToStop; i++) {
    stringNum = '' + i;
    for (let j = 0; j < 4; j++) {
      currCharNum = stringNum[j];
      currNum = Number(currCharNum);
      if (currNum % 2 === 0) {
        isEven = true;
        break;
      }
    }
    if (!isEven) {
      result += stringNum + ' ';
    } else {
      isEven = false;
    }
  }
  console.log(result);
}

// barcodeGenerator(["2345", "6789"]);
barcodeGenerator(['3256', '6579']);
