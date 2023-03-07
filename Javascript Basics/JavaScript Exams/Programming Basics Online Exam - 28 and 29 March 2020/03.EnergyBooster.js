function energyBooster(input) {
  const fruit = input[0];
  const sizeSet = input[1];
  const countSets = Number(input[2]);
  let pricePerSet = 0;
  let price = 0;

  //                       Диня      	Манго	      Ананас     	Малина
  //   2 броя (small)	56 лв./бр.	36.66 лв./бр.	42.10 лв./бр.	20 лв./бр.
  //   5 броя (big)	28.70 лв./бр.	19.60 лв./бр.	24.80 лв./бр.	15.20 лв./бр.

  switch (fruit) {
    case 'Watermelon':
      switch (sizeSet) {
        case 'small':
          pricePerSet = 56 * 2;
          break;
        case 'big':
          pricePerSet = 28.7 * 5;
          break;
      }
      break;
    case 'Mango':
      switch (sizeSet) {
        case 'small':
          pricePerSet = 36.66 * 2;
          break;
        case 'big':
          pricePerSet = 19.6 * 5;
          break;
      }
      break;
    case 'Pineapple':
      switch (sizeSet) {
        case 'small':
          pricePerSet = 42.1 * 2;
          break;
        case 'big':
          pricePerSet = 15.2 * 5;
          break;
      }
      break;
    case 'Raspberry':
      switch (sizeSet) {
        case 'small':
          pricePerSet = 20 * 2;
          break;
        case 'big':
          pricePerSet = 24.8 * 5;
          break;
      }
      break;
  }
  price = pricePerSet * countSets;
  if (price > 1000) {
    price *= 0.5;
  } else if (price >= 400) {
    price *= 0.85;
  }

  console.log(`${price.toFixed(2)} lv.`);
}

// energyBooster(["Watermelon", "big", 4]);
// energyBooster(["Pineapple", "small", 1]);
// energyBooster(["Raspberry", "small", "50"]);
energyBooster(['Mango', 'big', '8']);
