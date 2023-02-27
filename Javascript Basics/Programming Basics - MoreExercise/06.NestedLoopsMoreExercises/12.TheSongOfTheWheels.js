function theSongOfTheWheels(input) {
  const controlNum = Number(input[0]);
  let count = 0;
  let result = '';
  let haveNumber = false;
  let passWordNum = '';

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          if (a < b && c > d) {
            if (a * b + c * d === controlNum) {
              count++;
              result += '' + a + b + c + d + ' ';
              if (count === 4) {
                haveNumber = true;
                passWordNum = '' + a + b + c + d;
              }
            }
          }
        }
      }
    }
  }
  if (haveNumber) {
    console.log(result);
    console.log(`Password: ${passWordNum}`);
  } else if (result !== '') {
    console.log(result);
    console.log('No!');
  } else {
    console.log('No!');
  }
}

// theSongOfTheWheels(["11"]);
// theSongOfTheWheels(["139"]);
// theSongOfTheWheels(["110"]);
theSongOfTheWheels(['55']);
