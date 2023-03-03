function movieStars(input) {
  //     •	Бюджет за актьори - реално число в интервала [1000.0... 2 100 000.0]
  // След това се четат многократно по един или два реда до команда "ACTION" или до изчерпване на бюджета:
  // •	Име на актьор - текст
  // Ако името на актьора съдържа по-малко или равно на 15 брой символи:
  // o	Възнаграждение - реално число в интервала [250.0… 1 000 000.0]

  const budget = Number(input[0]);
  const length = Number(input.length);
  let actor = '';
  let actorLength = 0;
  let actorPrice = 0;
  let budgetLeft = budget;
  let moneyNeeded = 0;
  let budjetIsOk = true;

  for (let i = 1; i < length; i++) {
    actor = input[i];
    if (actor !== 'ACTION') {
      actorLength = Number(actor.length);
      if (actorLength > 15) {
        actorPrice = 0.2 * budgetLeft;
      } else {
        actorPrice = Number(input[i + 1]);
        i++;
      }
      if (budgetLeft >= actorPrice) {
        budgetLeft -= actorPrice;
      } else {
        budjetIsOk = false;
        break;
      }
    } else {
      break;
    }
  }
  moneyNeeded = Math.abs(budgetLeft - actorPrice);
  if (budjetIsOk) {
    console.log(`We are left with ${budgetLeft.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${moneyNeeded.toFixed(2)} leva for our actors.`);
  }
}

movieStars([
  '2000000.5',
  'Jet Lee',
  '1000000',
  'Jackie Chan',
  '1000000',
  'ACTION',
]);
