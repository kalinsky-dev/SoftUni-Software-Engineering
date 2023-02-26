function gameOfIntervals(input) {
  let index = 0;
  const counter = Number(input[index]);
  index++;

  let currNum = 0;
  let count40 = 0;
  let count30 = 0;
  let count20 = 0;
  let count10 = 0;
  let count0 = 0;
  let invalidNumbers = 0;
  let points = 0;
  let currPoints = 0;

  for (let i = 0; i < counter; i++) {
    currNum = Number(input[index]);
    if (currNum >= 40 && currNum <= 50) {
      currPoints = 100;
      points += currPoints;
      count40++;
    } else if (currNum >= 30 && currNum < 40) {
      currPoints = 50;
      points += currPoints;
      count30++;
    } else if (currNum >= 20 && currNum < 30) {
      currPoints = 0.4 * currNum;
      points += currPoints;
      count20++;
    } else if (currNum >= 10 && currNum < 20) {
      currPoints = 0.3 * currNum;
      points += currPoints;
      count10++;
    } else if (currNum >= 0 && currNum < 10) {
      currPoints = 0.2 * currNum;
      points += currPoints;
      count0++;
    } else {
      invalidNumbers++;
      points /= 2;
    }

    index++;
  }
  //   •	1ви ред: "{Краен резултат}"
  // •	2ри ред: "From 0 to 9: {процент в интервала}%"
  // •	3ти ред: "From 10 to 19: {процент в интервала}%"
  // •	4ти ред: "From 20 to 29: {процент в интервала}%"
  // •	5ти ред: "From 30 to 39: {процент в интервала}%"
  // •	6ти ред: "From 40 to 50: {процент в интервала}%"
  // •	7ми ред: "Invalid numbers: {процент в интервала}%"

  let percentage0 = (count0 / counter) * 100;
  let percentage10 = (count10 / counter) * 100;
  let percentage20 = (count20 / counter) * 100;
  let percentage30 = (count30 / counter) * 100;
  let percentage40 = (count40 / counter) * 100;
  let percentageInvalid = (invalidNumbers / counter) * 100;

  console.log(`${points.toFixed(2)}`);
  console.log(`From 0 to 9: ${percentage0.toFixed(2)}%`);
  console.log(`From 10 to 19: ${percentage10.toFixed(2)}%`);
  console.log(`From 20 to 29: ${percentage20.toFixed(2)}%`);
  console.log(`From 30 to 39: ${percentage30.toFixed(2)}%`);
  console.log(`From 40 to 50: ${percentage40.toFixed(2)}%`);
  console.log(`Invalid numbers: ${percentageInvalid.toFixed(2)}%`);
}

gameOfIntervals([
  '10',
  '43',
  '57',
  '-12',
  '23',
  '12',
  '0',
  '50',
  '40',
  '30',
  '20',
]);
