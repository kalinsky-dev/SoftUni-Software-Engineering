function safari(input) {
  //     •	Бюджет – реално число в интервала [0.00… 10000.00]
  // •	Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
  // •	Ден от седмицата – текст с възможности "Saturday" и "Sunday"

  const budget = Number(input[0]);
  const fuelNeeded = Number(input[1]);
  const dayOfWeek = input[2];

  //   •	Цената на един литър гориво е 2.10 лв.
  //   •	Цената за екскурзовод е 100лв.
  //   •	В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
  const fuelPrice = 2.1;
  const eksurzovod = 100;
  let price = 0;

  price = fuelNeeded * fuelPrice + eksurzovod;

  if (dayOfWeek === 'Saturday') {
    price *= 0.9;
  } else if (dayOfWeek === 'Sunday') {
    price *= 0.8;
  }

  const diff = Math.abs(budget - price);

  if (budget >= price) {
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
  } else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}

safari(['120', '30', 'Saturday']);
