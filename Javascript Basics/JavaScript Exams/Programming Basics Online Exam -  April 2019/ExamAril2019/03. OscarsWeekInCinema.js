function oscarsWeekInCinema(input) {
  const filmName = input[0];
  const filmLux = input[1];
  const filmPeople = Number(input[2]);
  let filmTax = 0;
  let price = 0;

  //   Филм normal luxury ultra luxury
  // A Star Is Born
  // 7.50 лв.
  // 10.50 лв.
  // 13.50 лв.
  // Bohemian Rhapsody
  // 7.35 лв.
  // 9.45 лв.
  // 12.75 лв.
  // Green Book
  // 8.15 лв.
  // 10.25 лв.
  // 13.25 лв.
  // The Favourite
  // 8.75 лв.
  // 11.55 лв.
  // 11.55 лв.

  switch (filmName) {
    case 'A Star Is Born':
      if (filmLux === 'normal') {
        filmTax = 7.5;
      } else if (filmLux === 'luxury') {
        filmTax = 10.5;
      } else if (filmLux === 'ultra luxury') {
        filmTax = 13.5;
      }
      break;

    case 'Bohemian Rhapsody':
      if (filmLux === 'normal') {
        filmTax = 7.35;
      } else if (filmLux === 'luxury') {
        filmTax = 9.45;
      } else if (filmLux === 'ultra luxury') {
        filmTax = 12.75;
      }
      break;

    case 'The Favourite':
      if (filmLux === 'normal') {
        filmTax = 8.75;
      } else if (filmLux === 'luxury') {
        filmTax = 11.55;
      } else if (filmLux === 'ultra luxury') {
        filmTax = 13.95;
      }
      break;

    case 'Green Book':
      if (filmLux === 'normal') {
        filmTax = 8.15;
      } else if (filmLux === 'luxury') {
        filmTax = 10.25;
      } else if (filmLux === 'ultra luxury') {
        filmTax = 13.25;
      }
      break;
  }
  price = filmTax * filmPeople;
  console.log(`${filmName} -> ${price.toFixed(2)} lv.`);
}

oscarsWeekInCinema(['A Star Is Born', 'luxury', '42']);
