function hairSalon(input) {
  index = 0;
  const targetForTheDay = Number(input[index]);
  index++;

  command = input[index];

  let price = 0;
  let currentPrice = 0;
  let typeOfWork = '';
  let choice = '';
  let targetIsReached = false;

  while (command !== 'closed') {
    typeOfWork = command;
    index++;
    choice = input[index];

    switch (typeOfWork) {
      case 'haircut':
        switch (choice) {
          case 'mens':
            currentPrice = 15;
            price += currentPrice;
            break;
          case 'ladies':
            currentPrice = 20;
            price += currentPrice;
            break;
          case 'kids':
            currentPrice = 10;
            price += currentPrice;
            break;
        }
        break;
      case 'color':
        switch (choice) {
          case 'touch up':
            currentPrice = 20;
            price += currentPrice;
            break;
          case 'full color':
            currentPrice = 30;
            price += currentPrice;
            break;
        }
        break;
    }

    if (price >= targetForTheDay) {
      console.log(`You have reached your target for the day!`);
      console.log(`Earned money: ${price}lv.`);
      targetIsReached = true;
      break;
    }

    index++;
    command = input[index];
  }

  let diff = Math.abs(price - targetForTheDay);
  if (!targetIsReached) {
    console.log(`Target not reached! You need ${diff}lv. more.`);
    console.log(`Earned money: ${price}lv.`);
  }
}

hairSalon([
  '300',
  'haircut',
  'ladies',
  'haircut',
  'kids',
  'color',
  'touch up',
  'closed',
]);
