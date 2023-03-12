function aluminiumJoinery(input) {
  //     Брой дограми – цяло число в интервала [0..1000];
  // 2. Вид на дограмите – текст "90X130" или "100X150" или "130X180" или "200X300";
  // 3. Начин на получаване – текст
  //  С доставка - "With delivery"
  //  Без доставка - "Without delivery"

  const joineryCount = Number(input[0]);
  const typeOfAJoinery = input[1].toUpperCase();
  const wayOfDelivery = input[2].toUpperCase();

  let priceOfAPiece = 0;
  let price = 0;

  if (joineryCount < 10) {
    console.log('Invalid order');
  } else {
    switch (typeOfAJoinery) {
      case '90X130':
        if (joineryCount > 30 && joineryCount < 60) {
          priceOfAPiece = 110 * 0.95;
        } else if (joineryCount >= 60) {
          priceOfAPiece = 110 * 0.92;
        } else {
          priceOfAPiece = 110;
        }
        break;
      case '100X150':
        if (joineryCount > 40 && joineryCount < 80) {
          priceOfAPiece = 140 * 0.94;
        } else if (joineryCount >= 80) {
          priceOfAPiece = 140 * 0.9;
        } else {
          priceOfAPiece = 140;
        }
        break;
      case '130X180':
        if (joineryCount > 20 && joineryCount < 50) {
          priceOfAPiece = 190 * 0.93;
        } else if (joineryCount >= 50) {
          priceOfAPiece = 190 * 0.88;
        } else {
          priceOfAPiece = 190;
        }
        break;
      case '200X300':
        if (joineryCount > 25 && joineryCount < 50) {
          priceOfAPiece = 250 * 0.91;
        } else if (joineryCount >= 50) {
          priceOfAPiece = 250 * 0.86;
        } else {
          priceOfAPiece = 250;
        }
        break;
      default:
        console.log('Invalid input.');
    }

    if (wayOfDelivery === 'WITH DELIVERY') {
      if (joineryCount > 99) {
        price = priceOfAPiece * joineryCount + 60;
        price = 0.96 * price;
      } else {
        price = priceOfAPiece * joineryCount + 60;
      }
    } else if (wayOfDelivery === 'WITHOUT DELIVERY') {
      if (joineryCount > 99) {
        price = priceOfAPiece * joineryCount;
        price = 0.96 * price;
      } else {
        price = priceOfAPiece * joineryCount;
      }
    }
    console.log(`${price.toFixed(2)} BGN`);
  }
}

aluminiumJoinery(['105', '100X150', 'With delivery']);
