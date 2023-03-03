function cinema(input) {
  const capacityHall = Number(input[0]);
  const length = Number(input.length);
  let countPeople = 0;

  const ticketPrice = 5;
  let totalPlaces = 0;
  let placesLeft = capacityHall;
  let currentCost = 0;
  let cost = 0;

  for (let i = 1; i < length; i++) {
    countPeople = input[i];
    if (countPeople !== 'Movie time!') {
      countPeople = Number(input[i]);
      if (placesLeft >= countPeople) {
        countPeople = Number(input[i]);
        totalPlaces += countPeople;
        placesLeft -= countPeople;
        currentCost = ticketPrice * countPeople;
        if (countPeople % 3 === 0) {
          currentCost -= 5;
        }
        cost += currentCost;
        currentCost = 0;
      }
    }
  }

  //   На конзолата първо да се отпечата един ред:
  //   •	При получена команда "Movie time!":
  //    "There are {останали места} seats left in the cinema."
  //   •	При изчерпване на местата в залата:
  //       "The cinema is full."
  //   След това да се отпечата:
  //       "Cinema income - {приходи от залата} lv."

  if (countPeople === 'Movie time!') {
    console.log(`There are ${placesLeft} seats left in the cinema.`);
    console.log(`Cinema income - ${cost} lv.`);
  } else if (placesLeft < totalPlaces) {
    console.log(`The cinema is full.`);
    console.log(`Cinema income - ${cost} lv.`);
  }
}

cinema([
  '100',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  'Movie time!',
]);
