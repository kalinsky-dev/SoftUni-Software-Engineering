function poolDay(input) {
  const peopleCount = Number(input[0]);
  const taxa = Number(input[1]);
  const cenaShezlong = Number(input[2]);
  const cenaChadur = Number(input[3]);
  let price = 0;

  const countChadur = Math.ceil(peopleCount / 2);
  const countShezlong = Math.ceil(0.75 * peopleCount);

  price =
    taxa * peopleCount +
    countChadur * cenaChadur +
    countShezlong * cenaShezlong;

  console.log(`${price.toFixed(2)} lv.`);
}

poolDay(['21', '5.5', '4.4', '6.2']);
