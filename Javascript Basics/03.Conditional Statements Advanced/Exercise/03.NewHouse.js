function newHouse(input) {
  const priceRoses = 5;
  const priceDahlias = 3.8;
  const priceTulips = 2.8;
  const priceNarcissus = 3;
  const priceGladiolus = 2.5;

  const typeFlowers = input[0];
  const countFlowers = Number(input[1]);
  const budget = Number(input[2]);
  let price = 0;
  let difference = 0;

  switch (typeFlowers) {
    case 'Roses':
      price = priceRoses * countFlowers;
      if (countFlowers > 80) {
        price *= 0.9;
      }
      break;
    case 'Dahlias':
      price = priceDahlias * countFlowers;
      if (countFlowers > 90) {
        price *= 0.85;
      }
      break;
    case 'Tulips':
      price = priceTulips * countFlowers;
      if (countFlowers > 80) {
        price *= 0.85;
      }
      break;
    case 'Narcissus':
      price = priceNarcissus * countFlowers;
      if (countFlowers < 120) {
        price *= 1.15;
      }
      break;
    case 'Gladiolus':
      price = priceGladiolus * countFlowers;
      if (countFlowers < 80) {
        price *= 1.2;
      }
      break;
  }
  difference = Math.abs(price - budget);

  if (budget >= price) {
    console.log(
      `Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${difference.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${difference.toFixed(2)} leva more.`
    );
  }
}

newHouse(['Tulips', '88', '260']);
