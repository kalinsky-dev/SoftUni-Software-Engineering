function trekkingMania(input) {
  //     •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
  // •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
  let index = 0;
  const countGroups = Number(input[index]);
  //   •	Група до 5 човека– Мусала
  // •	Група от 6 до 12 – Монблан
  // •	Група от 13 до 25 – Килиманджаро
  // •	Група от 26 до 40 – К2
  // •	Група от 41 или повече – Еверест

  let katerachiMusala = 0;
  let katerachiMonblan = 0;
  let katerachiKilimandjaro = 0;
  let katerachiK2 = 0;
  let katerachiEverest = 0;
  let katerachiAll = 0;

  for (let i = 1; i <= countGroups; i++) {
    index++;
    let currKaterachi = Number(input[index]);
    katerachiAll += currKaterachi;
    if (currKaterachi >= 41) {
      katerachiEverest += currKaterachi;
    } else if (currKaterachi >= 26) {
      katerachiK2 += currKaterachi;
    } else if (currKaterachi >= 13) {
      katerachiKilimandjaro += currKaterachi;
    } else if (currKaterachi >= 6) {
      katerachiMonblan += currKaterachi;
    } else if (currKaterachi > 0) {
      katerachiMusala += currKaterachi;
    }
  }

  //   •	Първи ред - процентът изкачващи Мусала
  // •	Втори ред – процентът изкачващи Монблан
  // •	Трети ред – процентът изкачващи Килиманджаро
  // •	Четвърти ред – процентът изкачващи К2
  // •	Пети ред – процентът изкачващи Еверест

  console.log(`${((katerachiMusala / katerachiAll) * 100).toFixed(2)}%`);
  console.log(`${((katerachiMonblan / katerachiAll) * 100).toFixed(2)}%`);
  console.log(`${((katerachiKilimandjaro / katerachiAll) * 100).toFixed(2)}%`);
  console.log(`${((katerachiK2 / katerachiAll) * 100).toFixed(2)}%`);
  console.log(`${((katerachiEverest / katerachiAll) * 100).toFixed(2)}%`);
}

trekkingMania([
  '10',
  '10',
  '5',
  '1',
  '100',
  '12',
  '26',
  '17',
  '37',
  '40',
  '78',
]);
