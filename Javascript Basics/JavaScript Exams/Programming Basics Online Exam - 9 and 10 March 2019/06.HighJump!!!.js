function highJumb(input) {
  //   •	На първия ред се прочита желаната от Тихомир Иванов височина в сантиметри
  // •	На всеки следващ ред до приключване на програмата се прочита височината от скока на Иванов

  const heightToWin = Number(input[0]);
  const length = input.length;
  let currHeight = heightToWin - 30;
  let currJump = 0;
  let index = 1;
  let unSuccessCount = 0;
  let jumpCount = 0;

  for (let i = 1; i < length; i++) {
    for (let j = 1; j <= 3; j++) {
      jumpCount++;
      currJump = Number(input[index]);
      if (currJump > currHeight) {
        currHeight += 5;
        j = 3;
        if (currJump > heightToWin) {
          console.log(
            `Tihomir succeeded, he jumped over ${heightToWin}cm after ${jumpCount} jumps.`
          );
          break;
        }
      } else if (currJump <= currHeight) {
        unSuccessCount++;
      }

      if (currJump <= currHeight && unSuccessCount === 3) {
        console.log(
          `Tihomir failed at ${currJump}cm after ${jumpCount} jumps.`
        );
        index = length;
        break;
      }

      index++;
    }

    unSuccessCount = 0;
    i = index - 1;
  }
}

highJumb(['231', '205', '212', '213', '228', '229', '230', '235']);
// highJumb(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
