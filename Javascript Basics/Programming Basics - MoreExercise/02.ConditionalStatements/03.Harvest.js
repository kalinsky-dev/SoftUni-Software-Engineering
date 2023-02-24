function harvest(input) {
  //     •	1ви ред: X кв.м е лозето – цяло число в интервала [10 … 5000]
  // •	2ри ред: Y грозде за един кв.м – реално число в интервала [0.00 … 10.00]
  // •	3ти ред: Z нужни литри вино – цяло число в интервала [10 … 600]
  // •	4ти ред: брой работници – цяло число в интервала [1 … 20]

  const squareMetersLoze = Number(input[0]);
  const kilosGrozdePerSquare = Number(input[1]);
  const neededWine = Number(input[2]);
  const workers = Number(input[3]);

  //   От лозе с площ X квадратни метри се заделя 40% от реколтата за производство на вино.
  //   От 1 кв.м лозе се изкарват Y килограма грозде. За 1 литър вино са нужни 2,5 кг. грозде.
  //    Желаното количество вино за продан е Z литра.
  // Напишете програма, която пресмята колко вино може да се произведе и дали това количество е достатъчно.
  // Ако е достатъчно, остатъкът се разделя по равно между работниците на лозето.

  const grozde = squareMetersLoze * kilosGrozdePerSquare * 0.4;
  const liters = grozde / 2.5;
  const difference = Math.abs(liters - neededWine);

  if (liters < neededWine) {
    console.log(
      `It will be a tough winter! More ${Math.floor(
        difference
      )} liters wine needed.`
    );
  } else {
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(liters)} liters.`
    );
    console.log(
      `${Math.ceil(difference)} liters left -> ${Math.ceil(
        difference / workers
      )} liters per person.`
    );
  }
}

harvest(['1020', '1.5', '425', '4']);
