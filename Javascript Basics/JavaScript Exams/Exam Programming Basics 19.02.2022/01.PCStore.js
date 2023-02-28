function pcStore(input) {
  //     •	На първи ред: цената в долари за процесора – реално число в интервала [200.00 … 3000.00]
  // •	На втори ред: цената в долари за видео карта – реално число в интервала [100.00 … 1500.00]
  // •	На трети ред: цената в долари за една RAM памет – реално число в интервала [80.00 ... 500.00]
  // •	На четвърти: ред брой RAM памети – цяло число в интервала [1 ... 4]
  // •   На пети ред: процент отстъпка – реално число в интервала [0.01 … 0.1]

  let priceInDollarsProcessor = Number(input[0]);
  let priceInDollarsVideoCard = Number(input[1]);
  let priceInDollarsRam = Number(input[2]);
  let countRam = Number(input[3]);
  let percentDischarge = Number(input[4]);

  priceInDollarsProcessor *= 1.57;
  priceInDollarsVideoCard *= 1.57;
  priceInDollarsRam *= 1.57;

  priceInDollarsProcessor *= 1 - percentDischarge;
  priceInDollarsVideoCard *= 1 - percentDischarge;

  let price =
    priceInDollarsProcessor +
    priceInDollarsVideoCard +
    priceInDollarsRam * countRam;

  console.log(`Money needed - ${price.toFixed(2)} leva.`);
}

pcStore(['500', '200', '80', '2', '0.05']);
