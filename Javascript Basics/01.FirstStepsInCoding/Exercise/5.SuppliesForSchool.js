function suppliesForSchool(input) {
  // Брой пакети химикали - цяло число в интервала [0...100]
  // Брой пакети маркери - цяло число в интервала [0...100]
  // Литри препарат за почистване на дъска - цяло число в интервала [0…50]
  // Процент намаление - цяло число в интервала [0...100]

  const penPacks = Number(input[0]);
  const markersPackets = Number(input[1]);
  const cleaningDetergentLiters = Number(input[2]);
  const discountPercentage = Number(input[3]) / 100;

  // Пакет химикали - 5.80 лв.
  // Пакет маркери - 7.20 лв.
  // Препарат - 1.20 лв (за литър)

  const penPrice = penPacks * 5.8;
  const markersPrice = markersPackets * 7.2;
  const detergentPrice = cleaningDetergentLiters * 1.2;
  const price = penPrice + markersPrice + detergentPrice;

  const realPrice = price - price * discountPercentage;

  console.log(realPrice);
}

suppliesForSchool(['2', '3', '4', '25']);
