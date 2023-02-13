function fishingBoat(input) {
  //     •	Бюджет на групата – цяло число в интервала [1…8000]
  // •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
  // •	Брой рибари – цяло число в интервала [4…18]

  const budget = Number(input[0]);
  const season = input[1];
  const fisherMen = Number(input[2]);
  let price = 0;
  let diff = 0;

  if (season === 'Spring') {
    price = 3000;
  } else if (season === 'Summer' || season === 'Autumn') {
    price = 4200;
  } else if (season === 'Winter') {
    price = 2600;
  }

  if (fisherMen >= 12) {
    price *= 0.75;
  } else if (fisherMen >= 7) {
    price *= 0.85;
  } else {
    price *= 0.9;
  }

  if (season !== 'Autumn' && fisherMen % 2 === 0) {
    price *= 0.95;
  }
  diff = Math.abs(price - budget);
  if (budget >= price) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat(['2000', 'Winter', '13']);
