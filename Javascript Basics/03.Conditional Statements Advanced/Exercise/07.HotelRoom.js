function hotelRoom(input) {
  // •	 месецът – May, June, July, August, September или October
  // •	броят на нощувките – цяло число в интервала [0 … 200]

  const month = input[0];
  const nigthsCount = Number(input[1]);
  let apartmentPrice = 0;
  let studioPrice = 0;

  switch (month) {
    case 'May':
    case 'October':
      studioPrice = nigthsCount * 50;
      if (nigthsCount > 14) {
        studioPrice *= 0.7;
      } else if (nigthsCount > 7) {
        studioPrice *= 0.95;
      }
      apartmentPrice = nigthsCount * 65;
      if (nigthsCount > 14) {
        apartmentPrice *= 0.9;
      }
      break;
    case 'June':
    case 'September':
      studioPrice = nigthsCount * 75.2;
      if (nigthsCount > 14) {
        studioPrice *= 0.8;
      }
      apartmentPrice = nigthsCount * 68.7;
      if (nigthsCount > 14) {
        apartmentPrice *= 0.9;
      }
      break;
    case 'July':
    case 'August':
      studioPrice = nigthsCount * 76;
      apartmentPrice = nigthsCount * 77;
      if (nigthsCount > 14) {
        apartmentPrice *= 0.9;
      }
      break;
  }

  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(['August', '20']);
