function circleAreaAndperimeter(input) {
  const radius = input[0];

  const perimeterOfACircle = 2 * Math.PI * radius;
  const areaOfACircle = Math.PI * Math.pow(radius, 2);

  console.log(areaOfACircle.toFixed(2));
  console.log(perimeterOfACircle.toFixed(2));
}

circleAreaAndperimeter(['3']);
