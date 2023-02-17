function trekkingMania(input) {
  // •	Група до 5 човека – изкачват Мусала
  // •	Група от 6 до 12 човека – изкачват Монблан
  // •	Група от 13 до 25 човека – изкачват Килиманджаро
  // •	Група от 26 до 40 човека –  изкачват К2
  // •	Група от 41 или повече човека – изкачват Еверест

  let index = 0;
  const groups = Number(input[index]);
  index++;
  let gropuMusala = 0;
  let gropuMonblan = 0;
  let gropuKilimandjaro = 0;
  let gropuK2 = 0;
  let gropuEverest = 0;
  let gropuWhole = 0;

  for (let i = 0; i < groups; i++) {
    let peoplePerGroup = Number(input[index]);

    if (peoplePerGroup >= 41) {
      gropuEverest += peoplePerGroup;
    } else if (peoplePerGroup >= 26) {
      gropuK2 += peoplePerGroup;
    } else if (peoplePerGroup >= 13) {
      gropuKilimandjaro += peoplePerGroup;
    } else if (peoplePerGroup >= 6) {
      gropuMonblan += peoplePerGroup;
    } else {
      gropuMusala += peoplePerGroup;
    }
    index++;
  }
  gropuWhole =
    gropuEverest + gropuK2 + gropuKilimandjaro + gropuMonblan + gropuMusala;
  let percentageMusala = (gropuMusala / gropuWhole) * 100;
  let percentageMonblan = (gropuMonblan / gropuWhole) * 100;
  let percentageKilimandjaro = (gropuKilimandjaro / gropuWhole) * 100;
  let percentageK2 = (gropuK2 / gropuWhole) * 100;
  let percentageEverest = (gropuEverest / gropuWhole) * 100;

  console.log(`${percentageMusala.toFixed(2)}%`);
  console.log(`${percentageMonblan.toFixed(2)}%`);
  console.log(`${percentageKilimandjaro.toFixed(2)}%`);
  console.log(`${percentageK2.toFixed(2)}%`);
  console.log(`${percentageEverest.toFixed(2)}%`);
}

trekkingMania(['5', '25', '41', '31', '250', '6']);
