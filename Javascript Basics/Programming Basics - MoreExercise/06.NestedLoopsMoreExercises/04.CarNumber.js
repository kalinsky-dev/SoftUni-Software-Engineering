function carNumber(input) {
  const startNum = Number(input[0]);
  const stopNum = Number(input[1]);
  let result = '';

  for (let i = startNum; i <= stopNum; i++) {
    for (let j = startNum; j <= stopNum; j++) {
      for (let k = startNum; k <= stopNum; k++) {
        for (let l = startNum; l <= stopNum; l++) {
          if (i % 2 === 0 && l % 2 !== 0 && i > l && (j + k) % 2 === 0) {
            result += '' + i + j + k + l + ' ';
          } else if (i % 2 !== 0 && l % 2 === 0 && i > l && (j + k) % 2 === 0) {
            result += '' + i + j + k + l + ' ';
          }
        }
      }
    }
  }
  console.log(result);
}

// carNumber(["2", "3"]);
// carNumber(["3", "5"]);
carNumber(['5', '8']);
