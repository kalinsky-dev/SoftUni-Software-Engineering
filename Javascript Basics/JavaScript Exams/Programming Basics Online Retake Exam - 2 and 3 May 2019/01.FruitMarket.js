function fruitMarket(input) {
  const qgodiCena = Number(input[0]);
  const bananiKg = Number(input[1]);
  const portokaliKg = Number(input[2]);
  const maliniKg = Number(input[3]);
  const qgodiKg = Number(input[4]);

  //   •	цената на малините е на половина по-ниска от тази на ягодите;
  // •	цената на портокалите е с 40% по-ниска от цената на малините;
  // •	цената на бананите е с 80% по-ниска от цената на малините.

  const maliniCena = 0.5 * qgodiCena;
  const portokaliCena = 0.6 * maliniCena;
  const bananiCena = 0.2 * maliniCena;

  let price = 0;
  price =
    maliniCena * maliniKg +
    bananiCena * bananiKg +
    portokaliCena * portokaliKg +
    qgodiCena * qgodiKg;

  console.log(`${price.toFixed(2)}`);
}

fruitMarket(['63.5', '3.57', '6.35', '8.15', '2.5']);
