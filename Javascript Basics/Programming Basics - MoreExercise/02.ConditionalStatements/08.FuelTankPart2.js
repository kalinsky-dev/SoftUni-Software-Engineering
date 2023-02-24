function fuelTankPart2(input) {
  //     •	Типа на горивото – текст с възможности: "Gas", "Gasoline" или "Diesel"
  // •	Количество гориво – реално число в интервала [1.00 … 50.00]
  // •	Притежание на клубна карта – текст с възможности: "Yes" или "No"

  const typeOfAFuel = input[0];
  const litres = Number(input[1]);
  const clubCard = input[2];

  let benzinCena = 2.22;
  let dizelCena = 2.33;
  let gazCena = 0.93;
  let price = 0;

  //   Ако водача има карта за отстъпки,  той се възползва от следните намаления за литър гориво: 18 ст. за литър бензин,
  //   12 ст. за литър дизел и 8 ст. за литър газ.
  //   Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
  //   при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.

  if (clubCard === 'Yes') {
    benzinCena -= 0.18;
    dizelCena -= 0.12;
    gazCena -= 0.08;
  }

  if (litres >= 20 && litres <= 25) {
    if (typeOfAFuel === 'Gas') {
      price = 0.92 * (gazCena * litres);
    } else if (typeOfAFuel === 'Gasoline') {
      price = 0.92 * (benzinCena * litres);
    } else if (typeOfAFuel === 'Diesel') {
      price = 0.92 * (dizelCena * litres);
    }
  } else if (litres > 25) {
    if (typeOfAFuel === 'Gas') {
      price = 0.9 * (gazCena * litres);
    } else if (typeOfAFuel === 'Gasoline') {
      price = 0.9 * (benzinCena * litres);
    } else if (typeOfAFuel === 'Diesel') {
      price = 0.9 * (dizelCena * litres);
    }
  } else {
    if (typeOfAFuel === 'Gas') {
      price = gazCena * litres;
    } else if (typeOfAFuel === 'Gasoline') {
      price = benzinCena * litres;
    } else if (typeOfAFuel === 'Diesel') {
      price = dizelCena * litres;
    }
  }
  console.log(`${price.toFixed(2)} lv.`);
}

fuelTankPart2(['Diesel', '19', 'No']);
