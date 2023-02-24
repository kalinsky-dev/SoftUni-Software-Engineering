function flowerShop(input) {
  const magnolii = Number(input[0]);
  const ziumbiul = Number(input[1]);
  const rozi = Number(input[2]);
  const cactus = Number(input[3]);
  const cenaPodaruk = Number(input[4]);

  //   •	Магнолии – 3.25 лева
  // •	Зюмбюли – 4 лева
  // •	Рози – 3.50 лева
  // •	Кактуси – 8 лева
  // От общата сума, Мария трябва да плати 5% данъци.

  const cenaMagnolii = 3.25;
  const cenaZiumbiul = 4;
  const cenaRozi = 3.5;
  const cenaKaktus = 8;

  let profit =
    magnolii * cenaMagnolii +
    ziumbiul * cenaZiumbiul +
    rozi * cenaRozi +
    cactus * cenaKaktus;
  profit *= 0.95;

  const difference = Math.abs(profit - cenaPodaruk);
  if (cenaPodaruk > profit) {
    console.log(`She will have to borrow ${Math.ceil(difference)} leva.`);
  } else {
    console.log(`She is left with ${Math.floor(difference)} leva.`);
  }
}

flowerShop(['15', '7', '5', '10', '100']);
