function easterParty(input) {
  const countGuests = Number(input[0]);
  let costPerGuest = Number(input[1]);
  const budget = Number(input[2]);
  let priceParty = 0;

  if (countGuests > 20) {
    costPerGuest = 0.75 * costPerGuest;
  } else if (countGuests > 15) {
    costPerGuest = 0.8 * costPerGuest;
  } else if (countGuests >= 10) {
    costPerGuest = 0.85 * costPerGuest;
  }

  priceParty = costPerGuest * countGuests;
  priceParty += 0.1 * budget;

  //   •	Ако бюджетът  е достатъчен:
  // o	"It is party time! {останали пари} leva left."
  // •	Ако бюджетът не е достатъчен:
  // o	"No party! {недостигащи пари} leva needed."
  // Резултатът да бъде форматиран до втория знак след десетичната запетая.
  let diff = Math.abs(priceParty - budget);
  if (budget >= priceParty) {
    console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`No party! ${diff.toFixed(2)} leva needed.`);
  }
}

easterParty(['18', '30', '450']);
