function club(input) {
  const profit = Number(input[0]);
  const length = input.length;
  let moneyForACoctail = 0;
  let moneyEarned = 0;
  let difference = 0;
  let coctailName = '';
  let count = 0;
  let cenaPoruchka = 0;

  for (let i = 1; i < length; i += 2) {
    count = i;
    coctailName = input[count];
    if (coctailName === 'Party!' || moneyEarned >= profit) {
      difference = Math.abs(profit - moneyEarned);
      if (coctailName === 'Party!') {
        console.log(`We need ${difference.toFixed(2)} leva more.`);
        console.log(`Club income - ${moneyEarned.toFixed(2)} leva.`);
        break;
      } else if (moneyEarned >= profit) {
        console.log('Target acquired.');
        console.log(`Club income - ${moneyEarned.toFixed(2)} leva.`);
        break;
      }
    } else {
      coctailName = input[i];
      moneyForACoctail = coctailName.length;
      moneyForACoctail = Number(moneyForACoctail);
      cenaPoruchka = moneyForACoctail * Number(input[i + 1]);

      if (cenaPoruchka % 2 !== 0) {
        cenaPoruchka *= 0.75;
        moneyEarned += cenaPoruchka;
      } else {
        moneyEarned += cenaPoruchka;
      }
    }
  }
  if (moneyEarned < profit && coctailName !== 'Party!') {
    console.log(`We need ${difference.toFixed(2)} leva more.`);
    console.log(`Club income - ${moneyEarned.toFixed(2)} leva.`);
  }
}

club(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian!', '10']);
