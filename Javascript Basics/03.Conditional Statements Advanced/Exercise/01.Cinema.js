function cinema(input) {
  const typeOfProjection = input[0];
  const rows = Number(input[1]);
  const cols = Number(input[2]);

  const premierePrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;

  let price = rows * cols;

  switch (typeOfProjection) {
    case 'Premiere':
      price *= premierePrice;
      break;
    case 'Normal':
      price *= normalPrice;
      break;
    case 'Discount':
      price *= discountPrice;
      break;
  }

  console.log(`${price.toFixed(2)} leva`);
}

cinema(['Discount', '12', '30']);
