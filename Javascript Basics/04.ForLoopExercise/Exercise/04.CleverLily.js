function cleverLily(input) {
  // •	Възрастта на Лили - цяло число в интервала [1...77]
  // •	Цената на пералнята - число в интервала [1.00...10 000.00]
  // •	Единична цена на играчка - цяло число в интервала [0...40]

  const lillyAge = Number(input[0]);
  const washingMashinePrice = Number(input[1]);
  const priceToy = Number(input[2]);
  let moneySaved = 0;
  let currMoney = 10;
  let toyCount = 0;

  for (let i = 1; i <= lillyAge; i++) {
    if (i % 2 === 0) {
      moneySaved += currMoney;
      currMoney += 10;
      moneySaved--;
    } else {
      toyCount++;
    }
  }
  moneySaved += toyCount * priceToy;
  let diff = Math.abs(moneySaved - washingMashinePrice);

  if (moneySaved >= washingMashinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

cleverLily(['21', '1570.98', '3']);
