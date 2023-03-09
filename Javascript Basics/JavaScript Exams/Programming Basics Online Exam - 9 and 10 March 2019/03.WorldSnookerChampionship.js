function worldSnookerChampionship(input) {
  //     1.	Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
  // 2.	Вид на билета – текст - “Standard”, “Premium” или “VIP”
  // 3.	Брой билети – цяло число в интервала [1 … 30]
  // 4.	Снимка с трофея – символ – 'Y' (да) или 'N' (не)

  const stages = input[0];
  const typeTicket = input[1];
  const countTickets = Number(input[2]);
  const fotoWithTroffy = input[3];

  let pricePerTicket = 0;
  let price = 0;

  switch (stages) {
    case 'Quarter final':
      switch (typeTicket) {
        case 'Standard':
          pricePerTicket = 55.5;
          break;
        case 'Premium':
          pricePerTicket = 105.2;
          break;
        case 'VIP':
          pricePerTicket = 118.9;
          break;
      }
      break;
    case 'Semi final':
      switch (typeTicket) {
        case 'Standard':
          pricePerTicket = 75.88;
          break;
        case 'Premium':
          pricePerTicket = 125.22;
          break;
        case 'VIP':
          pricePerTicket = 300.4;
          break;
      }
      break;
    case 'Final':
      switch (typeTicket) {
        case 'Standard':
          pricePerTicket = 110.1;
          break;
        case 'Premium':
          pricePerTicket = 160.66;
          break;
        case 'VIP':
          pricePerTicket = 400;
          break;
      }
      break;
  }
  price = pricePerTicket * countTickets;

  if (price > 4000) {
    price *= 0.75;
    console.log(price.toFixed(2));
  } else if (price > 2500) {
    price *= 0.9;
    if (fotoWithTroffy === 'Y') {
      price += 40 * countTickets;
    }
    console.log(price.toFixed(2));
  } else {
    if (fotoWithTroffy === 'Y') {
      price += 40 * countTickets;
    }
    console.log(price.toFixed(2));
  }
  //   console.log(price);
}

worldSnookerChampionship(['Quarter final', 'Standard', '11', 'N']);
