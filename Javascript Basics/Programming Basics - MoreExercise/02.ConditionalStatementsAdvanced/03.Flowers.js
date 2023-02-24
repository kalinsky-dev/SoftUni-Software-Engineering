function flowers(input) {
  //     •	На първия ред е броят на закупените хризантеми – цяло число в интервала [0 ... 200]
  // •	На втория ред е броят на закупените рози – цяло число в интервала [0 ... 200]
  // •	На третия ред е броят на закупените лалета – цяло число в интервала [0 ... 200]
  // •	На четвъртия ред е посочен сезона – [Spring, Summer, Аutumn, Winter]
  // •	На петия ред е посочено дали денят е празник – [Y – да / N - не]

  const hrizantemiBroi = Number(input[0]);
  const roziBroi = Number(input[1]);
  const laletaBroi = Number(input[2]);
  const season = input[3];
  const holiday = input[4];
  let price = 0;

  let cenaHrizantema = 0;
  let cenaRoza = 0;
  let cenaLale = 0;

  if (season === 'Summer' || season === 'Spring') {
    cenaHrizantema = 2.0;
    cenaRoza = 4.1;
    cenaLale = 2.5;
  } else if (season === 'Winter' || season === 'Autumn') {
    cenaHrizantema = 3.75;
    cenaRoza = 4.5;
    cenaLale = 4.15;
  }
  if (holiday === 'Y') {
    cenaHrizantema *= 1.15;
    cenaRoza *= 1.15;
    cenaLale *= 1.15;
  }

  price =
    cenaLale * laletaBroi +
    cenaHrizantema * hrizantemiBroi +
    cenaRoza * roziBroi;

  if (season === 'Spring' && laletaBroi > 7) {
    price *= 0.95;
  }
  if (season === 'Winter' && roziBroi >= 10) {
    price *= 0.9;
  }
  if (roziBroi + hrizantemiBroi + laletaBroi > 20) {
    price *= 0.8;
  }
  price += 2;

  console.log(`${price.toFixed(2)}`);
}

flowers(['3', '10', '9', 'Winter', 'N']);
