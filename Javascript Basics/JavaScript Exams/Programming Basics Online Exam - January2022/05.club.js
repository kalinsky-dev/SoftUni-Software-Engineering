function club(input) {
  //     •	На първия ред – желаната печалба на клуба - реално число в интервала [1.00... 15000.00]
  // Поредица от два реда до получаване на командата "Party!" или до достигане на желаната печалба:
  // o	Име на коктейла – текст
  // o	Брой на коктейлите за поръчката – цяло число в интервала [1… 50]
  let index = 0;
  const wishedProfit = Number(input[index]);
  index++;
  let command = input[index];
  let nameCurrentCoctail = '';
  let priceCurrentCoctail = 0;
  let currentCountCoctail = 0;
  let price = 0;
  let targetAcquired = false;

  let profit = 0;

  while (command !== 'Party!') {
    nameCurrentCoctail = command;
    index++;
    priceCurrentCoctail = Number(nameCurrentCoctail.length);
    currentCountCoctail = Number(input[index]);
    price = priceCurrentCoctail * currentCountCoctail;
    if (price % 2 !== 0) {
      price *= 0.75;
    }
    profit += price;
    if (profit >= wishedProfit) {
      console.log(`Target acquired.`);
      console.log(`Club income - ${profit.toFixed(2)} leva.`);
      targetAcquired = true;
      break;
    }
    index++;
    command = input[index];
  }
  let diff = Math.abs(profit - wishedProfit);
  if (command === 'Party!' && !targetAcquired) {
    console.log(`We need ${diff.toFixed(2)} leva more.`);
    console.log(`Club income - ${profit.toFixed(2)} leva.`);
  }
}

// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);
