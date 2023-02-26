function backToThePast(input) {
  //     •	Наследените пари – реално число в интервала [1.00 ... 1 000 000.00]
  // •	Годината, до която трябва да живее (включително) – цяло число в интервала [1801 ... 1900]

  const money = Number(input[0]);
  const yearToLive = Number(input[1]);
  let yearCount = 0;
  let moneyToAdd = 0;
  let diff = 0;

  for (let i = 1800; i <= yearToLive; i++) {
    if (i % 2 === 0) {
      moneyToAdd += 12000;
    } else {
      moneyToAdd += 12000 + 50 * (yearCount + 18);
    }
    yearCount++;
  }
  diff = Math.abs(money - moneyToAdd);
  if (money >= moneyToAdd) {
    console.log(
      `Yes! He will live a carefree life and will have ${diff.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
  }
}

backToThePast(['100000.15', '1808']);
