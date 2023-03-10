function computers(input) {
  //     1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
  // 2.	Броят видеокарти - цяло число в интервала [0…100]
  // 3.	Броят процесори - цяло число в интервала [0…100]
  // 4.	Броят рам памет - цяло число в интервала [0…100]

  //   •	Видеокарта – 250 лв./бр.
  // •	Процесор – 35% от цената на закупените видеокарти/бр.
  // •	Рам памет – 10% от цената на закупените видеокарти/бр.

  const budget = Number(input[0]);
  const countVideoCards = Number(input[1]);
  const countProcessors = Number(input[2]);
  const countRamMemory = Number(input[3]);

  const priceVideoCard = 250;
  const priceAllVideoCards = priceVideoCard * countVideoCards;

  const priceProcessor = 0.35 * priceAllVideoCards;
  const priceRamMemory = 0.1 * priceAllVideoCards;

  let cost =
    countProcessors * priceProcessor +
    countVideoCards * priceVideoCard +
    countRamMemory * priceRamMemory;
  //   console.log("" + cost);

  if (countVideoCards > countProcessors) {
    cost *= 0.85;
  }

  let diff = Math.abs(budget - cost);

  if (budget >= cost) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}

// computers(["900", "2", "1", "3"]);
computers(['920.45', '3', '1', '1']);
