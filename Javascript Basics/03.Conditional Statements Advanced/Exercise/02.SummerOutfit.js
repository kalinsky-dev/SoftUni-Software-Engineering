function summerOutfit(input) {
  const temp = Number(input[0]);
  const day = input[1];

  switch (day) {
    case 'Morning':
      if (temp >= 25) {
        console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
      } else if (temp > 18) {
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
      } else if (temp >= 10) {
        console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`);
      }
      break;
    case 'Afternoon':
      if (temp >= 25) {
        console.log(`It's ${temp} degrees, get your Swim Suit and Barefoot.`);
      } else if (temp > 18) {
        console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
      } else if (temp >= 10) {
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
      }
      break;
    case 'Evening':
      if (temp >= 25) {
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
      } else if (temp > 18) {
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
      } else if (temp >= 10) {
        console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
      }
      break;
  }
}

summerOutfit(['28', 'Evening']);
