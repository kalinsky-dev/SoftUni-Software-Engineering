function basketballEquipment(input) {
  const yearTax = Number(input[0]);

  //   •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
  // •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
  // •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
  // •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

  const basketballShoes = 0.6 * yearTax;
  const basketballlEkip = 0.8 * basketballShoes;
  const basketballBall = 0.25 * basketballlEkip;
  const basketballAccessories = 0.2 * basketballBall;

  price =
    yearTax +
    basketballShoes +
    basketballlEkip +
    basketballBall +
    basketballAccessories;

  console.log(price.toFixed(2));
}

basketballEquipment(['550']);
