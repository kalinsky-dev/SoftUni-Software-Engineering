function barcodeGenerator(input) {
  const numToStart = Number(input[0]);
  const numToStop = Number(input[1]);

  let numToStartString = '' + numToStart;
  let numToStopString = '' + numToStop;

  let firstStartNum = Number(numToStartString[0]);
  // console.log(typeof firstStartNum);
  let firstEndNum = Number(numToStopString[0]);
  let secondStartNum = Number(numToStartString[1]);
  let secondEndNum = Number(numToStopString[1]);
  let thirdStartNum = Number(numToStartString[2]);
  let thirdEndNum = Number(numToStopString[2]);
  let fourthStartNum = Number(numToStartString[3]);
  let fourthEndNum = Number(numToStopString[3]);

  let result = '';

  for (let i = firstStartNum; i <= firstEndNum; i++) {
    for (let j = secondStartNum; j <= secondEndNum; j++) {
      for (let k = thirdStartNum; k <= thirdEndNum; k++) {
        for (let l = fourthStartNum; l <= fourthEndNum; l++) {
          if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
            result += '' + i + j + k + l + ' ';
          }
        }
      }
    }
  }
  console.log(result);
}

barcodeGenerator(['2345', '6789']);
// barcodeGenerator(["3256", "6579"]);
