function transportPrice(input) {
  //     •	Първият ред съдържа числото n – брой километри – цяло число в интервала [1…5000]
  // •	Вторият ред съдържа дума “day” или “night” – пътуване през деня или през нощта

  const kilometers = Number(input[0]);
  const dayOrNight = input[1];
  const dayTariff = 0.79;
  const nightTariff = 0.9;
  let priceOfATransport = 0;

  if (kilometers >= 100) {
    priceOfATransport = kilometers * 0.06;
  } else if (kilometers >= 20) {
    priceOfATransport = kilometers * 0.09;
  } else {
    if (dayOrNight === 'day') {
      priceOfATransport = 0.7 + dayTariff * kilometers;
    } else {
      priceOfATransport = 0.7 + nightTariff * kilometers;
    }
  }
  console.log(priceOfATransport.toFixed(2));
}

transportPrice(['180', 'night']);
