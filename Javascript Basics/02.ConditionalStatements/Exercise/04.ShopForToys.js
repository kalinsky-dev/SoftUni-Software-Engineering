function toyShop(input) {
  const puzel = 2.6;
  const tolkingDoll = 3;
  const teddyBear = 4.1;
  const minion = 8.2;
  const truck = 2;
  let price = 0;

  const excursionPrice = Number(input[0]);
  const puzelCount = Number(input[1]);
  const talkinDollCount = Number(input[2]);
  const teddyBearCount = Number(input[3]);
  const minionCount = Number(input[4]);
  const truckCount = Number(input[5]);

  const toyCount =
    puzelCount + talkinDollCount + teddyBearCount + minionCount + truckCount;

  price =
    puzelCount * puzel +
    talkinDollCount * tolkingDoll +
    teddyBearCount * teddyBear +
    minionCount * minion +
    truck * truckCount;
  if (toyCount >= 50) {
    price = 0.75 * price;
  }
  price = 0.9 * price;

  const difference = Math.abs(price - excursionPrice);

  if (price >= excursionPrice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}

toyShop(['320', '8', '2', '5', '5', '1']);
