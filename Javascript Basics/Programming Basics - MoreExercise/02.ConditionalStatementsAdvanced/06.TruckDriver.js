function truckDriver(input) {
  const season = input[0];
  const kmPerMonth = Number(input[1]);
  let pricePerKm = 0;
  let price = 0;

  if (season === 'Spring' || season === 'Autumn') {
    if (kmPerMonth <= 5000) {
      pricePerKm = 0.75;
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
      pricePerKm = 0.95;
    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
      pricePerKm = 1.45;
    }
  } else if (season === 'Summer') {
    if (kmPerMonth <= 5000) {
      pricePerKm = 0.9;
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
      pricePerKm = 1.1;
    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
      pricePerKm = 1.45;
    }
  } else if (season === 'Winter') {
    if (kmPerMonth <= 5000) {
      pricePerKm = 1.05;
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
      pricePerKm = 1.25;
    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
      pricePerKm = 1.45;
    }
  }
  price = pricePerKm * kmPerMonth * 4;
  price *= 0.9;
  console.log(`${price.toFixed(2)}`);
}

truckDriver(['Spring', '1600']);
