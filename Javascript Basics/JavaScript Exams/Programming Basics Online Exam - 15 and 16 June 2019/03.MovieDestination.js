function movieDestination(input) {
  // 1.	Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
  // 2.	Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
  // 3.	Сезон – текст, с възможности "Summer" и "Winter"
  // 4.	Брой дни  – цяло число в диапазона [1… 40]

  const budget = Number(input[0]);
  const destination = input[1];
  const season = input[2];
  const days = Number(input[3]);
  let price = 0;
  let totalPrice = 0;
  let diff = 0;

  //   Дестинация
  // Сезон	   Dubai  	Sofia	   London
  // Winter	45 000 lv.	17 000 lv.	24 000 lv.
  // Summer	40 000 lv.	12 500 lv.	20 250 lv.

  switch (destination) {
    case 'Dubai':
      if (season === 'Winter') {
        price = 45000;
      } else {
        price = 40000;
      }
      totalPrice = price * days;
      totalPrice *= 0.7;
      break;
    case 'Sofia':
      if (season === 'Winter') {
        price = 17000;
      } else {
        price = 12500;
      }
      totalPrice = price * days;
      totalPrice *= 1.25;
      break;
    case 'London':
      if (season === 'Winter') {
        price = 24000;
      } else {
        price = 20250;
      }
      totalPrice = price * days;
      break;
  }
  diff = Math.abs(budget - totalPrice);

  if (budget >= totalPrice) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}

movieDestination(['1000000', 'Dubai', 'Summer', '5']);
