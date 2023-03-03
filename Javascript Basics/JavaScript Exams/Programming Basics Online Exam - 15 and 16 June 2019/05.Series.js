function serials(input) {
  const budget = Number(input[0]);
  const serialsCount = Number(input[1]);
  const length = 2 + 2 * serialsCount;
  let serialName = '';
  let currPrice = 0;
  let price = 0;
  let diff = 0;

  for (let i = 2; i < length; i += 2) {
    serialName = input[i];
    currPrice = Number(input[i + 1]);
    switch (serialName) {
      case 'Thrones':
        currPrice *= 0.5;
        break;
      case 'Lucifer':
        currPrice *= 0.6;
        break;
      case 'Protector':
        currPrice *= 0.7;
        break;
      case 'TotalDrama':
        currPrice *= 0.8;
        break;
      case 'Area':
        currPrice *= 0.9;
        break;
    }
    price += currPrice;
  }
  diff = Math.abs(budget - price);
  if (budget >= price) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}

serials([
  '25',
  '6',
  'Teen Wolf',
  '8',
  'Protector',
  '5',
  'TotalDrama',
  '5',
  'Area',
  '4',
  'Thrones',
  '5',
  'Lucifer',
  '9',
]);
