function sumAndProduct(input) {
  const num = Number(input[0]);
  let isFount = false;
  let numToFind = '';

  for (let a = 1; a <= 9; a++) {
    let countB = a;
    for (let b = 9; b >= countB; b--) {
      for (let c = 0; c <= 9; c++) {
        let countD = c;
        for (let d = 9; d >= countD; d--) {
          let sumNumbers = a + b + c + d;
          let multiplyNumbers = a * b * c * d;
          let del = Math.trunc(multiplyNumbers / sumNumbers);
          if (sumNumbers === multiplyNumbers && num % 10 === 5) {
            numToFind = '' + a + b + c + d;
            console.log(`${numToFind}`);
            isFount = true;
            break;
          } else if (del === 3 && num % 3 === 0) {
            numToFind = '' + d + c + b + a;
            console.log(`${numToFind}`);
            isFount = true;
            break;
          }
        }
        if (isFount) {
          break;
        }
      }
      if (isFount) {
        break;
      }
    }
    if (isFount) {
      break;
    }
  }
  if (!isFount) {
    console.log(`Nothing found`);
  }
}

sumAndProduct(['123']);
