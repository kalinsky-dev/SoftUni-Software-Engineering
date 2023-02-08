function petShop(input) {
  const packageForADog = Number(input[0]);
  const packageForACat = Number(input[1]);

  const priceDog = packageForADog * 2.5;
  const priceCat = packageForACat * 4;
  const amount = priceCat + priceDog;

  console.log(`"${amount} lv."`);
}

petShop(['5', '4']);
