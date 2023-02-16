function smallShop(input) {
  const drink = input[0];
  const town = input[1];
  const quantity = Number(input[2]);
  let price = 0;

  // град / продукт	coffee	water	beer	sweets	peanuts
  // Sofia	         0.50	0.80	1.20	1.45	1.60
  // Plovdiv         	0.40	0.70	1.15	1.30	1.50
  // Varna	        0.45	0.70	1.10	1.35	1.55

  switch (town) {
    case 'Sofia':
      switch (drink) {
        case 'coffee':
          price = quantity * 0.5;
          break;
        case 'water':
          price = quantity * 0.8;
          break;
        case 'beer':
          price = quantity * 1.2;
          break;
        case 'sweets':
          price = quantity * 1.45;
          break;
        case 'peanuts':
          price = quantity * 1.6;
          break;
      }
      console.log(price);
      break;
    case 'Plovdiv':
      switch (drink) {
        case 'coffee':
          price = quantity * 0.4;
          break;
        case 'water':
          price = quantity * 0.7;
          break;
        case 'beer':
          price = quantity * 1.15;
          break;
        case 'sweets':
          price = quantity * 1.3;
          break;
        case 'peanuts':
          price = quantity * 1.5;
          break;
      }
      console.log(price);
      break;
    case 'Varna':
      switch (drink) {
        case 'coffee':
          price = quantity * 0.45;
          break;
        case 'water':
          price = quantity * 0.7;
          break;
        case 'beer':
          price = quantity * 1.1;
          break;
        case 'sweets':
          price = quantity * 1.35;
          break;
        case 'peanuts':
          price = quantity * 1.55;
          break;
      }
      console.log(price);
      break;
  }
}

smallShop(['coffee', 'Varna', '2']);
