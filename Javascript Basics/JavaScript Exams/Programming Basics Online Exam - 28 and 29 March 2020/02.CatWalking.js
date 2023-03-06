function cadWalking(input) {
  //     •	На първия ред - минути разходка на ден - цяло число в интервала [1...50]
  // •	На втория ред - броят на разходките дневно - цяло число в интервала [1…10]
  // •	На третия ред - приетите от котката калории на ден – цяло число в интервала [100…4000]

  const minutesOfAWalk = Number(input[0]);
  const countWalksPerDay = Number(input[1]);
  const caloriesPerDay = Number(input[2]);

  const burnCalories = minutesOfAWalk * countWalksPerDay * 5;

  if (burnCalories >= 0.5 * caloriesPerDay) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${burnCalories}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${burnCalories}.`
    );
  }
}

cadWalking(['30', '3', '600']);
// cadWalking(["15", "2", "500"]);
// cadWalking(["40", "2", "300"]);
