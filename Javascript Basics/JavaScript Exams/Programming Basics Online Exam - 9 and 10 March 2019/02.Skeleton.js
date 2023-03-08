function skeleton(input) {
  //     Ред 1.	Минути на контролата – цяло число в интервала [0…59]
  // Ред 2.	Секунди на контролата – цяло число в интервала [0…59]
  // Ред 3.	Дължината на улея в метри – реално число в интервала [0.00…50000]
  // Ред 4.	Секунди за изминаване на 100 метра – цяло число в интервала [0…1000]

  let minutesControl = Number(input[0]);
  let secundsControl = Number(input[1]);
  let lengthInMeters = Number(input[2]);
  let secundsPer100 = Number(input[3]);

  secundsControl = minutesControl * 60 + secundsControl;

  let secondsMarin = (lengthInMeters / 100) * secundsPer100;
  let timeToAdd = (lengthInMeters / 120) * 2.5;
  secondsMarin -= timeToAdd;
  let diff = secondsMarin - secundsControl;

  if (secondsMarin <= secundsControl) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${secondsMarin.toFixed(3)}.`);
  } else {
    console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
  }
}

skeleton(['2', '12', '1200', '10']);
