function footballLeague(input) {
  //     1.	Капацитетът на стадиона – цяло число в интервала [1 … 10000];
  // 2.	Броят на всички фенове – цяло число в интервала [1 … 10000].
  // За всеки един фен, на отделен ред се прочита:
  // 1.	Секторът, на който се намира – текст – "A", "B", "V" и "G".
  let index = 0;
  const capacityStadion = Number(input[index]);
  index++;
  const countFens = Number(input[index]);
  index++;
  let fensA = 0;
  let fensB = 0;
  let fensV = 0;
  let fensG = 0;
  let part = '';

  for (let i = 0; i < countFens; i++) {
    part = input[index];
    switch (part) {
      case 'A':
        fensA++;
        break;
      case 'B':
        fensB++;
        break;
      case 'V':
        fensV++;
        break;
      case 'G':
        fensG++;
        break;
    }
    index++;
  }
  let allFens = fensA + fensB + fensG + fensV;
  let percentageA = (fensA / countFens) * 100;
  let percentageB = (fensB / countFens) * 100;
  let percentageV = (fensV / countFens) * 100;
  let percentageG = (fensG / countFens) * 100;
  let persentageCapacity = (allFens / capacityStadion) * 100;

  console.log(`${percentageA.toFixed(2)}%`);
  console.log(`${percentageB.toFixed(2)}%`);
  console.log(`${percentageV.toFixed(2)}%`);
  console.log(`${percentageG.toFixed(2)}%`);
  console.log(`${persentageCapacity.toFixed(2)}%`);
}

footballLeague([
  '93',
  '16',
  'A',
  'V',
  'G',
  'G',
  'B',
  'B',
  'G',
  'B',
  'A',
  'B',
  'B',
  'B',
  'A',
  'B',
  'B',
  'A',
]);
