function company(input) {
  //     •	На първия ред са необходимите часовете – цяло число в интервала [0 ... 200 000]
  // •	На втория ред са дните, с които фирмата разполага – цяло число в интервала [0 ... 20 000]
  // •	На третия ред е броят на служителите, работещи извънредно – цяло число в интервала [0 ... 200]

  const neededHours = Number(input[0]);
  const dayToHave = Number(input[1]);
  const peopleToWorkMore = Number(input[2]);

  //   Фирмата разполага с определен брой дни. През 10% от дните служителите са на обучение и не могат да работят по проекта.
  //    Един нормален работен ден във фирмата е 8 часа. Всеки служител може да работи по проекта в извънработно време по 2 часа на ден.
  // Часовете трябва да са закръглени към по-ниско цяло число (Например –> 6.98 часа се закръглят на 6 часа).
  // Напишете програма, която изчислява дали фирмата може да завърши проекта навреме и колко часа не достигат или остават.

  const days = 0.9 * dayToHave;
  const hourToHave = Math.trunc(days * 8 + peopleToWorkMore * 2 * dayToHave);

  if (hourToHave >= neededHours) {
    console.log(`Yes!${hourToHave - neededHours} hours left.`);
  } else {
    console.log(`Not enough time!${neededHours - hourToHave} hours needed.`);
  }
}

company(['99', '3', '1']);
