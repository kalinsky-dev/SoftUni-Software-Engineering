function bikeRace(input) {
  //     •	Първият ред – броят младши велосипедисти. Цяло число в интервала [1…100]
  // •	Вторият ред – броят старши велосипедисти. Цяло число в интервала [1… 100]
  // •	Третият ред – вид трасе – "trail", "cross-country", "downhill" или "road"

  const juniors = Number(input[0]);
  const seniors = Number(input[1]);
  const route = input[2];
  let money = 0;
  let taxJunior = 0;
  let taxSenior = 0;

  switch (route) {
    case 'trail':
      taxJunior = 5.5;
      taxSenior = 7;
      break;
    case 'cross-country':
      taxJunior = 8;
      taxSenior = 9.5;
      if (juniors + seniors >= 50) {
        taxJunior = 8 * 0.75;
        taxSenior = 9.5 * 0.75;
      }
      break;
    case 'downhill':
      taxJunior = 12.25;
      taxSenior = 13.75;
      break;
    case 'road':
      taxJunior = 20;
      taxSenior = 21.5;
      break;
    default:
      console.log('Invalid Route!');
      break;
  }
  money = taxSenior * seniors + taxJunior * juniors;
  money = 0.95 * money;
  console.log(`${money.toFixed(2)}`);
}

bikeRace(['3', '40', 'road']);
