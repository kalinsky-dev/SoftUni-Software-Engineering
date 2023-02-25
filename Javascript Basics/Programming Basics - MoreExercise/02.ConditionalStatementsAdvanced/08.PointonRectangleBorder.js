function pointOnRectagnleBoarder(input) {
  // x1, y1, x2, y2, x и y (като се гарантира, че x1 < x2 и y1 < y2).

  const x1 = Number(input[0]);
  const y1 = Number(input[1]);
  const x2 = Number(input[2]);
  const y2 = Number(input[3]);
  const x = Number(input[4]);
  const y = Number(input[5]);

  if (x === x1 || x === x2) {
    if (y >= y1 && y <= y2) {
      console.log('Border');
    } else {
      console.log('Inside / Outside');
    }
  } else if (y === y1 || y === y2) {
    if (x >= x1 && x <= x2) {
      console.log('Border');
    } else {
      console.log('Inside / Outside');
    }
  } else {
    console.log('Inside / Outside');
  }
}

pointOnRectagnleBoarder(['2', '-3', '12', '3', '1', '3']);
