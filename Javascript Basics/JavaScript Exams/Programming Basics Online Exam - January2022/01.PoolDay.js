function poolDay(input) {
  //     •	Първи ред – брой на хората. Цяло число в интервала [1…100]
  // •	Втори ред – такса вход. Реално число в интервала [0.00…50.00]
  // •	Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
  // •	Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00]

  const countPeople = Number(input[0]);
  const taxToEnter = Number(input[1]);
  const priceForOneSchezlong = Number(input[2]);
  const priceForOneUmbrella = Number(input[3]);

  let countSchezlongs = Math.ceil(0.75 * countPeople);
  let countUmbrellas = Math.ceil(countPeople / 2);
  let price =
    countPeople * taxToEnter +
    countSchezlongs * priceForOneSchezlong +
    countUmbrellas * priceForOneUmbrella;

  console.log(`${price.toFixed(2)} lv.`);
}

poolDay(['21', '5.50', '4.40', '6.20']);
poolDay(['50', '6', '8', '4']);
