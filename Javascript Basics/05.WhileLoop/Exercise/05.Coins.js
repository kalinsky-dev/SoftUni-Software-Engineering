function coins(input) {
  const coins = Number(input[0]);
  let coinsInCents = parseInt(coins * 100);
  //   console.log(`${coinsInCents}`);
  let coinsCounts = 0;

  while (coinsInCents > 0) {
    if (coinsInCents / 200 >= 1) {
      coinsCounts++;
      coinsInCents -= 200;
    } else if (coinsInCents / 100 >= 1) {
      coinsCounts++;
      coinsInCents -= 100;
    } else if (coinsInCents / 50 >= 1) {
      coinsCounts++;
      coinsInCents -= 50;
    } else if (coinsInCents / 20 >= 1) {
      coinsCounts++;
      coinsInCents -= 20;
    } else if (coinsInCents / 10 >= 1) {
      coinsCounts++;
      coinsInCents -= 10;
    } else if (coinsInCents / 5 >= 1) {
      coinsCounts++;
      coinsInCents -= 5;
    } else if (coinsInCents / 2 >= 1) {
      coinsCounts++;
      coinsInCents -= 2;
    } else if (coinsInCents / 1 >= 1) {
      coinsCounts++;
      coinsInCents -= 1;
    }
  }
  console.log(coinsCounts);
}

// coins(["1.23"]);
// coins(["2"]);
// coins(["0.56"]);
// coins(["2.73"]);
