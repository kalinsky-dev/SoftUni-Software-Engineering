function easterShop(input) {
  //     •	На първи ред - Началното количество яйца в магазина - цяло число в интервала [1… 10000]
  // •	След това поредица от два реда (до получаване на команда "Close"
  // или при заявка за купуване на повече от наличните в магазина яйца) :
  // o	Команда за купуване или допълване на яйца в магазина – текст ("Buy" или "Fill")
  // o	Брой на яйца, които да бъдат купени или допълнени в магазина – цяло число в интервала
  // [1… 1000]

  const eggsInit = Number(input[0]);
  let length = Number(input.length);
  let operation = '';
  let eggsLeft = eggsInit;
  let currEggs = 0;
  let eggsSold = 0;

  for (let i = 1; i < length; i = i + 2) {
    operation = input[i];
    currEggs = Number(input[i + 1]);
    if (operation === 'Buy') {
      if (eggsLeft >= currEggs) {
        eggsSold += currEggs;
        eggsLeft -= currEggs;
      } else {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${eggsLeft}.`);
      }
    } else if (operation === 'Fill') {
      eggsLeft += currEggs;
    } else if (operation === 'Close') {
      console.log(`Store is closed!`);
      console.log(`${eggsSold} eggs sold.`);
    }
  }
}

// easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(['20', 'Fill', '30', 'Buy', '15', 'Buy', '20', 'Close']);
