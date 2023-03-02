function cinemaVoucher(input) {
  const arrayLength = Number(input.length);
  //   console.log(arrayLength);
  const money = Number(input[0]);
  let moneyLeft = money;
  let countTicket = 0;
  let countOtherProducts = 0;
  let price = 0;
  let i = 1;

  let name = input[i];

  while (name !== 'End' && i < arrayLength) {
    let nameLength = name.length;
    // console.log(nameLength);

    if (nameLength > 8) {
      let ch1 = name[0];
      let ch2 = name[1];
      //   console.log(ch1);
      //   console.log(ch2);
      let price1 = ch1.charCodeAt(0);
      let price2 = ch2.charCodeAt(0);
      //   console.log(price1);
      //   console.log(price2);
      price += price1 + price2;
      //   console.log(price);
      moneyLeft = money - price;
      if (moneyLeft >= 0) {
        countTicket++;
      } else {
        break;
      }
    } else if (nameLength <= 8) {
      let ch1 = name[0];
      let price1 = ch1.charCodeAt(0);
      price += price1;
      moneyLeft = money - price;
      if (moneyLeft >= 0) {
        countOtherProducts++;
      } else {
        break;
      }
    }
    i++;
    name = input[i];
  }
  console.log(`${countTicket}`);
  console.log(`${countOtherProducts}`);
}
cinemaVoucher([
  '1500',
  'Avengers: Endgame',
  'Bohemian Rhapsody',
  'Deadpool 2',
  'End',
]);
