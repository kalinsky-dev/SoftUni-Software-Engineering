function godzilaVsKong(input) {
  //     За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
  // Известно е, че:

  const budgetForAFilm = Number(input[0]);
  const statistCount = Number(input[1]);
  let clothesPricePerAStatist = Number(input[2]);
  let costs = 0;

  // •	Декорът за филма е на стойност 10% от бюджета.
  const decorPrice = 0.1 * budgetForAFilm;
  // •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
  if (statistCount > 150) {
    clothesPricePerAStatist *= 0.9;
  }

  costs = statistCount * clothesPricePerAStatist + decorPrice;
  const difference = Math.abs(budgetForAFilm - costs);

  if (budgetForAFilm >= costs) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${difference.toFixed(2)} leva left.`
    );
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
  }
}

godzilaVsKong(['9587.88', '222', '55.68']);
