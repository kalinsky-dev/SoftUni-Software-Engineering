function logistics(input) {
  //     •	На първия ред – броя на товарите за превоз – цяло число в интервала [1...1000]
  // •	За всеки един товар на отделен ред – тонажа на товара – цяло число в интервала [1...1000]

  let index = 0;
  const countLoads = Number(input[index]);
  index++;
  let loadAll = 0;
  let cenaAll = 0;
  let loadMikrobus = 0;
  let loadKamion = 0;
  let loadVlak = 0;
  let loadCurr = 0;
  let cenaMikrobus = 0;
  let cenaKamion = 0;
  let cenaVlak = 0;

  //   •	До 3 тона – микробус (200 лева на тон)
  // •	От 4 до 11 тона – камион (175 лева на тон)
  // •	12 и повече тона – влак (120 лева на тон)

  for (let i = 0; i < countLoads; i++) {
    loadCurr = Number(input[index]);
    if (loadCurr >= 12) {
      loadVlak += loadCurr;
      cenaVlak += 120 * loadCurr;
    } else if (loadCurr >= 4) {
      loadKamion += loadCurr;
      cenaKamion += 175 * loadCurr;
    } else {
      loadMikrobus += loadCurr;
      cenaMikrobus += 200 * loadCurr;
    }
    index++;
  }
  cenaAll = cenaVlak + cenaKamion + cenaMikrobus;
  loadAll = loadVlak + loadKamion + loadMikrobus;
  let averageCost = cenaAll / loadAll;

  let loadMikrobusPercent = (loadMikrobus / loadAll) * 100;
  let loadKamionPercent = (loadKamion / loadAll) * 100;
  let loadVlakPercent = (loadVlak / loadAll) * 100;

  console.log(`${averageCost.toFixed(2)}`);
  console.log(`${loadMikrobusPercent.toFixed(2)}%`);
  console.log(`${loadKamionPercent.toFixed(2)}%`);
  console.log(`${loadVlakPercent.toFixed(2)}%`);
}

logistics(['5', '2', '10', '20', '1', '7']);
