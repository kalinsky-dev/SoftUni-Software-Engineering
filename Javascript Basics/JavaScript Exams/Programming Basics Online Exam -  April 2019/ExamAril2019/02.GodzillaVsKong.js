function godzillaVsKong(input) {
  //     Ред 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
  // Ред 2. Брой на статистите – цяло число в интервала [1 … 500]
  // Ред 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]

  const budgetFilm = Number(input[0]);
  const statistsCount = Number(input[1]);
  let clothesPricePerStatist = Number(input[2]);
  let costOfAFilm = 0;

  //   • Декорът за филма е на стойност 10% от бюджета.
  //   • При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.

  const dekorPrice = 0.1 * budgetFilm;

  if (statistsCount > 150) {
    clothesPricePerStatist = 0.9 * clothesPricePerStatist;
  }
  costOfAFilm = dekorPrice + clothesPricePerStatist * statistsCount;

  //   Ако парите за декора и дрехите са повече от бюджета:
  // o "Not enough money!"
  // o "Wingard needs {парите недостигащи за филма} leva more."
  // • Ако парите за декора и дрехите са по малко или равни на бюджета:
  // o "Action!"
  // o "Wingard starts filming with {останалите пари} leva left."

  if (costOfAFilm > budgetFilm) {
    console.log('Not enough money!');
    console.log(
      `Wingard needs ${(costOfAFilm - budgetFilm).toFixed(2)} leva more.`
    );
  } else {
    console.log('Action!');
    console.log(
      `Wingard starts filming with ${(budgetFilm - costOfAFilm).toFixed(
        2
      )} leva left.`
    );
  }
}

godzillaVsKong(['20000', '120', '55.5']);
