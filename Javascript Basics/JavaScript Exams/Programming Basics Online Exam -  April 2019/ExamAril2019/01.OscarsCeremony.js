function oscarCeremony(input) {
  const rentTax = Number(input[0]);

  //   Статуетки – цената им е 30% по-малка от наема на залата
  // • Кетъринг – цената му е 15% по-малка от тази на статуетките
  // • Озвучаване – цената му е 1 / 2 от цената за кетъринг

  const statuetki = 0.7 * rentTax;
  const ceturing = 0.85 * statuetki;
  const music = 0.5 * ceturing;

  const cost = rentTax + statuetki + ceturing + music;

  console.log(cost.toFixed(2));
}

oscarCeremony(['3500']);
