function oscars(input) {
  const nameOfActor = input[0];
  const pointsAcademy = Number(input[1]);
  const countLectors = Number(input[2]);
  const length = 3 + countLectors * 2;
  let points = pointsAcademy;
  let currentPoints = 0;
  let nameOfLectors = '';
  let nameOfLectorLength = 0;
  let neededPoints = 0;

  for (let i = 3; i < length; i += 2) {
    if (points <= 1250.5) {
      nameOfLectors = input[i];
      nameOfLectorLength = Number(nameOfLectors.length);
      currentPoints = Number(input[i + 1]);
      currentPoints = (nameOfLectorLength * currentPoints) / 2;
      points += currentPoints;
    } else {
      break;
    }
  }
  neededPoints = 1250.5 - points;
  if (points >= 1250.5) {
    console.log(
      `Congratulations, ${nameOfActor} got a nominee for leading role with ${points.toFixed(
        1
      )}!`
    );
  } else {
    console.log(
      `Sorry, ${nameOfActor} you need ${neededPoints.toFixed(1)} more!`
    );
  }
}

oscars([
  'Sandra Bullock',
  '340',
  '5',
  'Robert De Niro',
  '50',
  'Julia Roberts',
  '40.5',
  'Daniel Day-Lewis',
  '39.4',
  'Nicolas Cage',
  '29.9',
  'Stoyanka Mutafova',
  '33',
]);
