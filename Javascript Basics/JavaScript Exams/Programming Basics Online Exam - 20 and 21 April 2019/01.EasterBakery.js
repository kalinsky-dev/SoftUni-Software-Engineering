function easterBakery(input) {
  //     1.	Цена на брашното за един килограм – реално число в интервала [0.00 … 10000.00]
  // 2.	Килограми на брашното – реално число в интервала [0.00 … 10000.00]
  // 3.	Килограми на захарта – реално число в интервала [0.00 … 10000.00]
  // 4.	Брой кори с яйца – цяло число в интервала [0 … 10000]
  // 5.	Пакети мая  – цяло число в интервала [0 … 10000]

  const priceBrashno = Number(input[0]);
  const kgBrashno = Number(input[1]);
  const kgZahar = Number(input[2]);
  const countKoriSQica = Number(input[3]);
  const paketiMaq = Number(input[4]);

  let price = 0;

  //   •	цената на килограм захар е с 25% по-ниска от тази на килограм брашно
  // •	цената на една кора с яйца е с 10% по-висока от цената на килограм брашно
  // •	цената на един пакет мая е с 80% по-ниска от цената на килограм захар

  let cenaKgZahar = 0.75 * priceBrashno;
  let cenaKoriZaQica = 1.1 * priceBrashno;
  let cenaPaketMaq = 0.2 * cenaKgZahar;

  price =
    priceBrashno * kgBrashno +
    kgZahar * cenaKgZahar +
    cenaKoriZaQica * countKoriSQica +
    paketiMaq * cenaPaketMaq;

  console.log(`${price.toFixed(2)}`);
}

easterBakery(['50', '10', '3.5', '6', '1']);
