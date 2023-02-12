function sumOfSeconds(input) {
  const secFirst = Number(input[0]);
  const secSecond = Number(input[1]);
  const secThird = Number(input[2]);

  const secAll = secFirst + secSecond + secThird;
  let min = 0;
  let sec = 0;

  if (secAll >= 120) {
    min = 2;
    sec = secAll - 120;
  } else if (secAll >= 60) {
    min = 1;
    sec = secAll - 60;
  } else {
    min = 0;
    sec = secAll;
  }

  if (sec < 10) {
    console.log(`${min}:0${sec}`);
  } else {
    console.log(`${min}:${sec}`);
  }
}

sumOfSeconds(['14', '12', '10']);
