function darts(input) {
  //     •	Името на играча - текст
  // След това до получаване на команда "Retire" се четат многократно по два реда:
  // 1.	Поле – текст ("Single", "Double" или "Triple")
  // 2.	Точки – цяло число в интервала [0… 100]

  const nameOfPlayer = input[0];
  let pole = '';
  let points = 301;
  let currPoints = 0;
  let count = 1;
  const length = Number(input.length);
  let successfulSchots = 0;
  let unsuccessfulSchots = 0;

  while (points > 0 && count < length - 1) {
    pole = input[count];
    if (pole === 'Retire') {
      break;
    }
    currPoints = Number(input[count + 1]);
    switch (pole) {
      case 'Single':
        currPoints = currPoints;
        if (currPoints > points) {
          unsuccessfulSchots++;
          count += 2;
          continue;
        }
        points -= currPoints;
        successfulSchots++;
        break;
      case 'Double':
        currPoints = 2 * currPoints;
        if (currPoints > points) {
          unsuccessfulSchots++;
          count += 2;
          continue;
        }
        points -= currPoints;
        successfulSchots++;
        break;
      case 'Triple':
        currPoints = 3 * currPoints;
        if (currPoints > points) {
          unsuccessfulSchots++;
          count += 2;
          continue;
        }
        points -= currPoints;
        successfulSchots++;
        break;
    }
    count += 2;
  }
  if (points === 0) {
    console.log(`${nameOfPlayer} won the leg with ${successfulSchots} shots.`);
  } else {
    console.log(
      `${nameOfPlayer} retired after ${unsuccessfulSchots} unsuccessful shots.`
    );
  }
}

// darts([
//   "Michael van Gerwen",
//   "Triple",
//   "20",
//   "Triple",
//   "19",
//   "Double",
//   "10",
//   "Single",
//   "3",
//   "Single",
//   "1",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "20",
// ]);

// darts([
//   "Stephen Bunting",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "7",
//   "Single",
//   "12",
//   "Double",
//   "1",
//   "Single",
//   "1",
// ]);

darts([
  'Rob Cross',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Double',
  '20',
  'Triple',
  '20',
  'Double',
  '5',
  'Triple',
  '10',
  'Double',
  '6',
  'Retire',
]);
