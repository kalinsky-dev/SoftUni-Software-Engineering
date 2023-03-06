function changeBureau(input) {
  //     •	На първия ред – броят биткойни. Цяло число в интервала [0…20]
  // •	На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
  // •	На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]

  //   •	1 биткойн = 1168 лева.
  // •	1 китайски юан = 0.15 долара.
  // •	1 долар = 1.76 лева.
  // •	1 евро = 1.95 лева.

  const bitkoinCount = Number(input[0]);
  const joanaCount = Number(input[1]);
  const comisionna = Number(input[2]);

  const euroForBitcoin = 1168 / 1.95;
  const euroForJoana = (0.15 * 1.76) / 1.95;

  let price = bitkoinCount * euroForBitcoin + joanaCount * euroForJoana;
  price = price - (price * comisionna) / 100;
  console.log(`${price.toFixed(2)}`);
}

changeBureau(['1', '5', '5']);
