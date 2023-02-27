function oddEvenNumber(input) {
  index = 0;
  const nNumbers = Number(input[index]);
  index++;
  let currNum = 0;
  let evenSum = 0;
  let oddSum = 0;

  let oddMin = 0;
  let oddMax = 0;
  let evenMin = 0;
  let evenMax = 0;
  let minNumEven = Number.POSITIVE_INFINITY;
  let maxNumEven = Number.NEGATIVE_INFINITY;
  let minNumOdd = Number.POSITIVE_INFINITY;
  let maxNumOdd = Number.NEGATIVE_INFINITY;

  for (let i = 1; i <= nNumbers; i++) {
    currNum = Number(input[index]);
    if (i % 2 === 0) {
      evenSum += currNum;
      if (currNum >= maxNumEven) {
        evenMax = currNum;
        maxNumEven = currNum;
      }
      if (currNum <= minNumEven) {
        evenMin = currNum;
        minNumEven = currNum;
      }
    } else {
      oddSum += currNum;
      if (currNum >= maxNumOdd) {
        oddMax = currNum;
        maxNumOdd = currNum;
      }
      if (currNum <= minNumOdd) {
        oddMin = currNum;
        minNumOdd = currNum;
      }
    }

    index++;
  }

  //   "OddSum=" + {сума на числата на нечетни позиции},
  //   "OddMin=" + { минимална стойност на числата на нечетни позиции } / {“No”},
  //   "OddMax=" + { максимална стойност на числата на нечетни позиции } / {“No”},
  //   "EvenSum=" + { сума на числата на четни позиции },
  //   "EvenMin=" + { минимална стойност на числата на четни позиции } / {“No”},
  //   "EvenMax=" + { максимална стойност на числата на четни позиции } / {“No”}

  if (nNumbers === 1) {
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
    console.log(`EvenSum=0.00,`);
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No,`);
  } else if (nNumbers > 1) {
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)},`);
  } else if (nNumbers === 0) {
    console.log(`OddSum=0.00,`);
    console.log(`OddMin=No,`);
    console.log(`OddMax=No,`);
    console.log(`EvenSum=0.00,`);
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No,`);
  }
}

// oddEvenNumber(["1", "0"]);
// oddEvenNumber(["1", "1"]);
// oddEvenNumber(["0"]);
// oddEvenNumber(["2", "1.5", "-2.5"]);
// oddEvenNumber(["1", "-5"]);
// oddEvenNumber(["5", "3", "-2", "8", "11", "-3"]);
// oddEvenNumber(["6", "2", "3", "5", "4", "2", "1"]);
// oddEvenNumber(["4", "1.5", "1.75", "1.5", "1.75"]);
oddEvenNumber(['3', '-1', '-2', '-3']);
