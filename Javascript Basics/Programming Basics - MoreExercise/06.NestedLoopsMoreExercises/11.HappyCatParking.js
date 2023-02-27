function happyCatParking(input) {
  // •	Брой дни – цяло число в интервала [1 … 5]
  // •	Брой часове за всеки един от дните - цяло число в интервала [1 … 24]

  const countDays = Number(input[0]);
  const countHours = Number(input[1]);
  let sumAll = 0;
  let daySum = 0;

  for (let days = 1; days <= countDays; days++) {
    for (let hours = 1; hours <= countHours; hours++) {
      if (days % 2 === 0 && hours % 2 !== 0) {
        daySum += 2.5;
      } else if (days % 2 !== 0 && hours % 2 === 0) {
        daySum += 1.25;
      } else {
        daySum += 1;
      }
    }
    console.log(`Day: ${days} - ${daySum.toFixed(2)} leva`);
    sumAll += daySum;
    daySum = 0;
  }
  console.log(`Total: ${sumAll.toFixed(2)} leva`);
}

happyCatParking(['2', '5']);
// happyCatParking(["5", "2"]);
