function tennisEquipment(input) {
  //     •	Цена на една тенис ракета – реално число в интервала [0.00…100000.00]
  // •	Брой тенис ракети - цяло число в интервала [0…100]
  // •	Брой чифтове маратонки - цяло число в интервала [0…100]

  const tenisRaketaPrice = Number(input[0]);
  const countTenisRaketi = Number(input[1]);
  const countMaratonki = Number(input[2]);
  const priceMaratonki = (1 / 6) * tenisRaketaPrice;
  let priceAll =
    tenisRaketaPrice * countTenisRaketi + priceMaratonki * countMaratonki;
  priceAll = 1.2 * priceAll;
  let priceDjokovich = (1 / 8) * priceAll;
  let priceOthers = (7 / 8) * priceAll;

  console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovich)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(priceOthers)}`);
}

tennisEquipment(['850', '4', '2']);
