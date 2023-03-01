function familyTrip(input) {
  const budget = Number(input[0]);
  const nightsCount = Number(input[1]);
  let nightPrice = Number(input[2]);
  const procentAdditionalCosts = Number(input[3]);
  let price = 0;

  if (nightsCount > 7) {
    nightPrice *= 0.95;
  }
  price = nightPrice * nightsCount + (procentAdditionalCosts * budget) / 100;
  const difference = Math.abs(price - budget);

  if (budget >= price) {
    console.log(
      `Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${difference.toFixed(2)} leva needed.`);
  }
}

familyTrip(['500', '7', '66', '15']);
