function highJump(input) {
  //   •	На първия ред се прочита желаната от Тихомир Иванов височина в сантиметри
  // •	На всеки следващ ред до приключване на програмата се прочита височината от скока на Иванов

  let index = 0;
  const heightToWin = Number(input[index]);
  index++;
  const length = input.length;
  //   console.log(typeof length);
  let currHeight = heightToWin - 30;
  let currJump = 0;

  let unSuccessCount = 0;
  let jumpCount = 0;
  let isFailed = false;

  while (index < length) {
    currJump = Number(input[index]);
    jumpCount++;
    if (currJump > heightToWin) {
      console.log(
        `Tihomir succeeded, he jumped over ${heightToWin}cm after ${jumpCount} jumps.`
      );
      break;
    }
    if (currJump > currHeight) {
      currHeight += 5;
      unSuccessCount = 0;
    } else {
      unSuccessCount++;
    }
    if (unSuccessCount === 3) {
      console.log(
        `Tihomir failed at ${currHeight}cm after ${jumpCount} jumps.`
      );
      isFailed = true;
      break;
    }
    index++;
  }

  if (currJump <= heightToWin && !isFailed) {
    console.log(`Tihomir failed at ${currHeight}cm after ${jumpCount} jumps.`);
  }
}
