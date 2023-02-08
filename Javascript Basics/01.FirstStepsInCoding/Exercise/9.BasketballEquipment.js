function bascetballEquipment(input) {
  //NEEDED STUFF
  //     •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
  // •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
  // •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
  // •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

  const taxForAYear = Number(input[0]);
  const bascetballSchoes = (60 / 100) * taxForAYear;
  const bascetballEquipment = (80 / 100) * bascetballSchoes;
  const bascetBall = 0.25 * bascetballEquipment;
  const bascetBallAccessories = 0.2 * bascetBall;

  //INPUT
  // От конзолата се четe 1 ред:
  // •	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]

  //OUTPUT
  // Да се отпечата на конзолата колко ще са разходите на Джеси, ако започне да спортува баскетбол.

  const cost =
    taxForAYear +
    bascetballSchoes +
    bascetballEquipment +
    bascetBall +
    bascetBallAccessories;

  console.log(cost);
}

bascetballEquipment(['365']);
