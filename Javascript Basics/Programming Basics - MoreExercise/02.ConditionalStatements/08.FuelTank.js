function fuelTank(input) {
  const typeOfAFuel = input[0];
  const litersInATank = Number(input[1]);

  //   Ако литрите гориво са повече или равни на 25, на конзолата да се отпечата "You have enough {вида на горивото}.",
  //   ако са по-малко от 25, да се отпечата "Fill your tank with {вида на горивото}!".
  //   В случай, че бъде въведено гориво, различно от посоченото, да се отпечата "Invalid fuel!".

  if (
    typeOfAFuel !== 'Diesel' &&
    typeOfAFuel !== 'Gasoline' &&
    typeOfAFuel !== 'Gas'
  ) {
    console.log('Invalid fuel!');
  } else {
    if (litersInATank >= 25) {
      console.log(`You have enough ${typeOfAFuel.toLowerCase()}.`);
    } else if (litersInATank < 25) {
      console.log(`Fill your tank with ${typeOfAFuel.toLowerCase()}!`);
    }
  }
}

fuelTank(['Gasoline', '20']);
