function histogram(input) {
  let index = 0;
  const n = input[index];
  index++;
  let currNum = 0;
  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;
  let p4Count = 0;
  let p5Count = 0;
  let numP = 0;

  for (let i = 0; i < n; i++) {
    currNum = Number(input[index]);
    index++;
    if (currNum >= 800) {
      p5Count++;
    } else if (currNum >= 600) {
      p4Count++;
    } else if (currNum >= 400) {
      p3Count++;
    } else if (currNum >= 200) {
      p2Count++;
    } else {
      p1Count++;
    }
  }
  numP = p1Count + p2Count + p3Count + p4Count + p5Count;
  let p1Percentage = (p1Count / numP) * 100;
  let p2Percentage = (p2Count / numP) * 100;
  let p3Percentage = (p3Count / numP) * 100;
  let p4Percentage = (p4Count / numP) * 100;
  let p5Percentage = (p5Count / numP) * 100;

  console.log(`${p1Percentage.toFixed(2)}%`);
  console.log(`${p2Percentage.toFixed(2)}%`);
  console.log(`${p3Percentage.toFixed(2)}%`);
  console.log(`${p4Percentage.toFixed(2)}%`);
  console.log(`${p5Percentage.toFixed(2)}%`);
}

histogram(['3', '1', '2', '999']);
