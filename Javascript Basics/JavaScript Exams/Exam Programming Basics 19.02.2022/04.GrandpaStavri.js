function grandpaStavri(input) {
  //     •	На първия ред – N – броят дни  – цяло число в интервала [1...300]
  // •	За всеки един ден на отделен ред:
  // 	количество на ракията – реално число в интервала [1.00...500.00]
  // 	градус на получената напитка - реално число в интервала [10.00...99.00]

  let index = 0;
  const days = Number(input[index]);
  index++;
  const length = input.length;

  let quontityRakiq = 0;
  let gradusRakiq = 0;
  let currentRakiq = 0;
  let currentGradus = 0;

  for (let i = 1; i <= days; i++) {
    currentRakiq = Number(input[index]);
    index++;
    currentGradus = Number(input[index]);
    index++;

    gradusRakiq += currentRakiq * currentGradus;
    quontityRakiq += currentRakiq;
  }
  let gradusiObshto = gradusRakiq / quontityRakiq;

  //   •	Първи ред: "Liter: {общо литрите}"
  // •	Втори ред: "Degrees: {градусите на общата смес}"
  // •	Трети ред – да се отпечатва един от следните редове:
  // 	"Not good, you should baking!" - ако градусът е по-малък от 38
  // 	"Super!" - ако градусът е от 38 до 42
  // 	"Dilution with distilled water!" - aко градусът е по-голям от 42

  console.log(`Liter: ${quontityRakiq.toFixed(2)}`);
  console.log(`Degrees: ${gradusiObshto.toFixed(2)}`);

  if (gradusiObshto > 42) {
    console.log(`Dilution with distilled water!`);
  } else if (gradusiObshto >= 38) {
    console.log(`Super!`);
  } else {
    console.log(`Not good, you should baking!`);
  }
}

grandpaStavri(['3', '100', '45', '50', '55', '150', '36']);
