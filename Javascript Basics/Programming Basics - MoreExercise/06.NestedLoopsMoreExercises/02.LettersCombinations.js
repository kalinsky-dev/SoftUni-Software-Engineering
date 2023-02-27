function lettersCombinations(input) {
  //     Ред 1.	Малка буква от английската азбука за начало на интервала – от ‘a’ до ‚z’.
  // Ред 2.	Малка буква от английската азбука за край на интервала  – от първата буква до ‚z’.
  // Ред 3.	Малка буква от английската азбука – от ‘a’ до ‚z’ – като комбинациите съдържащи тази буквата се пропускат.

  const firstLetter = input[0];
  const secondLetter = input[1];
  const thirdLetter = input[2];

  const numFirst = firstLetter.charCodeAt();
  const numSecond = secondLetter.charCodeAt();
  const numNotToPrint = thirdLetter.charCodeAt();

  //   const maxNum = Math.max(numFirst, numSecond, numSecond);
  //   const minNum = Math.min(numFirst, numSecond, numSecond);

  //   console.log(numFirst);
  //   console.log(numSecond);
  //   console.log(numThird);
  //   console.log(minNum);
  //   console.log(maxNum);

  let countCombination = 0;
  let result = '';
  let count = 0;

  for (let i = numFirst; i <= numSecond; i++) {
    for (let j = numFirst; j <= numSecond; j++) {
      for (let k = numFirst; k <= numSecond; k++) {
        if (i === numNotToPrint || j === numNotToPrint || k === numNotToPrint) {
          continue;
        }
        let charI = String.fromCharCode(i);
        let charJ = String.fromCharCode(j);
        let charK = String.fromCharCode(k);
        count++;
        result += charI + charJ + charK + ' ';
      }
    }
  }
  console.log(`${result}${count}`);
}

// lettersCombinations(["a", "c", "b"]);
// lettersCombinations(["f", "k", "h"]);
lettersCombinations(['a', 'c', 'z']);
