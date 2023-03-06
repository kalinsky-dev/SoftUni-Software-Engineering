function easterDecoration(input) {
  const priceBasket = 1.5;
  const priceWreath = 3.8;
  const priceChokolateBunny = 7;

  let index = 0;
  const countClients = Number(input[index]);
  index++;
  let currentProduct = input[index];
  let countItems = 0;
  let price = 0;
  let priceAll = 0;
  let priceAverage = 0;

  for (let i = 0; i < countClients; i++) {
    while (currentProduct !== 'Finish') {
      countItems++;

      switch (currentProduct) {
        case 'basket':
          price += priceBasket;
          index++;
          currentProduct = input[index];
          break;
        case 'wreath':
          price += priceWreath;
          index++;
          currentProduct = input[index];
          break;
        case 'chocolate bunny':
          price += priceChokolateBunny;
          index++;
          currentProduct = input[index];
          break;
      }
    }
    index++;
    currentProduct = input[index];
    if (countItems % 2 === 0) {
      price *= 0.8;
    }
    console.log(
      `You purchased ${countItems} items for ${price.toFixed(2)} leva.`
    );
    priceAll += price;
    countItems = 0;
    price = 0;
  }
  priceAverage = priceAll / countClients;
  console.log(`Average bill per client is: ${priceAverage.toFixed(2)} leva.`);
}

easterDecoration([
  '2',
  'basket',
  'wreath',
  'chocolate bunny',
  'Finish',
  'wreath',
  'chocolate bunny',
  'Finish',
]);

easterDecoration([
  '1',
  'basket',
  'wreath',
  'chocolate bunny',
  'wreath',
  'basket',
  'chocolate bunny',
  'Finish',
]);
