function repainting(input) {
  //NEEDED STUFF
  // 	Предпазен найлон - 1.50 лв. за кв. метър
  // Боя - 14.50 лв. за литър
  const protectiveNylonCost = 1.5;
  const paintCost = 14.5;
  const paintThinnerCost = 5;

  //INPUT

  // Входът се чете от конзолата и съдържа точно 4 реда:
  // 1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
  // 2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
  // 3.	Количество разредител (в литри) - цяло число в интервала [1…30]
  // 4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

  const nylon = Number(input[0]);
  const paint = Number(input[1]);
  const paintThinner = Number(input[2]);
  const workingHours = Number(input[3]);

  //OUTPUT

  // За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон,
  //  разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа,
  //   е равна на 30% от сбора на всички разходи за материали.
  // Изход
  // Да се отпечата на конзолата един ред:
  // "{сумата на всички разходи}"

  const moneyForMaterials =
    (nylon + 2) * protectiveNylonCost +
    paint * paintCost * 1.1 +
    paintThinner * paintThinnerCost +
    0.4;
  const moneyForWorkersPerHour = (moneyForMaterials * 30) / 100;
  const moneyForTheWork =
    moneyForMaterials + moneyForWorkersPerHour * workingHours;

  console.log(moneyForTheWork.toFixed(2));
}

repainting(['10 ', '11 ', '4 ', '8 ']);
