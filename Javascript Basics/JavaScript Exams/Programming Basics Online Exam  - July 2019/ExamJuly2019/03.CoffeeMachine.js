function coffeeMachine(input) {
  const drinkType = input[0];
  const sugar = input[1];
  const countDrinks = Number(input[2]);
  let pricePerDrink = 0;
  let price = 0;

  if (sugar === 'Without') {
    if (drinkType === 'Espresso') {
      pricePerDrink = 0.65 * 0.9;
      if (countDrinks >= 5) {
        pricePerDrink *= 0.75;
      }
    } else if (drinkType === 'Capuccino') {
      pricePerDrink = 0.65 * 1;
    } else if (drinkType === 'Tea') {
      pricePerDrink = 0.65 * 0.5;
    }
  } else if (sugar === 'Normal') {
    if (drinkType === 'Espresso') {
      pricePerDrink = 1;
      if (countDrinks >= 5) {
        pricePerDrink *= 0.75;
      }
    } else if (drinkType === 'Capuccino') {
      pricePerDrink = 1.2;
    } else if (drinkType === 'Tea') {
      pricePerDrink = 0.6;
    }
  } else if (sugar === 'Extra') {
    if (drinkType === 'Espresso') {
      pricePerDrink = 1.2;
      if (countDrinks >= 5) {
        pricePerDrink *= 0.75;
      }
    } else if (drinkType === 'Capuccino') {
      pricePerDrink = 1.6;
    } else if (drinkType === 'Tea') {
      pricePerDrink = 0.7;
    }
  }
  price = pricePerDrink * countDrinks;
  if (price >= 15) {
    price *= 0.8;
  }

  console.log(
    `You bought ${countDrinks} cups of ${drinkType} for ${price.toFixed(2)} lv.`
  );
}

coffeeMachine(['Espresso', 'Without', '10']);
