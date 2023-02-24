function matchTickets(input) {
  //     •	На първия ред е бюджетът – реално число в интервала [1 000.00 ... 1 000 000.00]
  // •	На втория ред е категорията – "VIP" или "Normal"
  // •	На третия ред е броят на хората в групата – цяло число в интервала [1 ... 200]

  const budget = Number(input[0]);
  const category = input[1];
  const peopleCount = Number(input[2]);
  let moneyLeft = 0;
  let cost = 0;

  if (peopleCount >= 50) {
    moneyLeft = budget - 0.25 * budget;
  } else if (peopleCount >= 25) {
    moneyLeft = budget - 0.4 * budget;
  } else if (peopleCount >= 10) {
    moneyLeft = budget - 0.5 * budget;
  } else if (peopleCount >= 5) {
    moneyLeft = budget - 0.6 * budget;
  } else if (peopleCount >= 1) {
    moneyLeft = budget - 0.75 * budget;
  }

  if (category === 'VIP') {
    cost = 499.99;
  } else if (category === 'Normal') {
    cost = 249.99;
  }
  const difference = Math.abs(moneyLeft - cost * peopleCount);

  if (moneyLeft >= cost * peopleCount) {
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
  }
}

matchTickets(['30000', 'VIP', '49']);
