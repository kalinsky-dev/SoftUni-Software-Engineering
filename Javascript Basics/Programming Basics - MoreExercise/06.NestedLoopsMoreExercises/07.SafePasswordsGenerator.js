function safePasswordsGenerator(input) {
  const aNum = Number(input[0]);
  const bNum = Number(input[1]);
  const maxGeneratedPass = Number(input[2]);

  let result = '';
  let checkGeneratedPass = 0;

  for (let A = 35; A <= 55; A++) {
    for (let B = 64; B <= 96; B++) {
      for (let x = 1; x <= aNum; x++) {
        for (let y = 1; y <= bNum; y++) {
          checkGeneratedPass++;

          let charA = String.fromCharCode(A);
          let charB = String.fromCharCode(B);
          result += charA + charB + x + y + charB + charA + '|';

          A++;
          B++;

          if (checkGeneratedPass === maxGeneratedPass) {
            A = 55;
            B = 96;
            x = aNum;
            y = bNum;
            break;
          }

          if (x === aNum && y === bNum) {
            A = 55;
            B = 96;
            x = aNum;
            y = bNum;
            break;
          }

          if (A === 56) {
            A = 34;
          }
          if (B === 97) {
            B = 63;
          }
        }
      }
    }
  }
  console.log(result);
}

// safePasswordsGenerator(["2", "3", "10"]);
safePasswordsGenerator(['20', '50', '10']);
