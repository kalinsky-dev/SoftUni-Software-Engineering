function footballKit(input) {
  //     •	На първия ред - цената на тениската – реално число в интервала [1.00 ... 1000.00]
  // •	На втория ред - сумата, която трябва да достигне, за да спечели топка – реално число в интервала [100.00 ... 10 000.00]

  const priceTSchirt = Number(input[0]);
  const sumToBeReachedToWinABall = Number(input[1]);

  //   . В магазина, в който пазарувал предлагали тениски, шорти, чорапи и бутонки.
  //    Знае се, че цената на шортите е 75% от цената на тениските, а цената на чорапите е 20% от цената на шортите.
  //     Бутонките струват два пъти колкото тениската и шортите взети заедно. Тъй като Пепи редовно пазарува от този магазин,
  //     той има карта за отстъпка на стойност 15% от общата сума на покупката. Ако сметката на Пепи е по-висока или равна на дадена сума,
  //      той получава подарък – точно копие на топката от световното. Напишете програма, която изчислява дали Пепи е спечелил топката.

  const priceShorti = 0.75 * priceTSchirt;
  const priceChorapi = 0.2 * priceShorti;
  const priceButonki = 2 * (priceTSchirt + priceShorti);

  let priceToCheck = priceTSchirt + priceShorti + priceChorapi + priceButonki;
  priceToCheck *= 0.85;
  let diff = Math.abs(priceToCheck - sumToBeReachedToWinABall);
  if (priceToCheck >= sumToBeReachedToWinABall) {
    console.log(`Yes, he will earn the world-cup replica ball!`);
    console.log(`His sum is ${priceToCheck.toFixed(2)} lv.`);
  } else {
    console.log(`No, he will not earn the world-cup replica ball.`);
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}

footballKit(['25', '100']);
