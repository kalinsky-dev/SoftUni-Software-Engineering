function easterLunch(input) {
  //     •	Козунак  – 3.20 лв.
  // •	Яйца –  4.35 лв. за кора с 12 яйца
  // •	Курабии – 5.40 лв. за килограм
  // •	Боя за яйца - 0.15 лв. за яйце
  //   •	Брой козунаци - цяло число в интервала [0 … 99]
  // •	Брой кори с яйца - цяло число в интервала [0 … 99]
  // •	Килограми курабии - цяло число в интервала [0 … 99]

  const kozunakCena = 3.2;
  const qicaKora12 = 4.35;
  const kurabiiZaKg = 5.4;
  const boqZaQice = 0.15;

  const countKozunak = Number(input[0]);
  const countKoriSQica = Number(input[1]);
  const kurabiiKg = Number(input[2]);

  let cost = 0;

  cost =
    kozunakCena * countKozunak +
    qicaKora12 * countKoriSQica +
    kurabiiKg * kurabiiZaKg +
    boqZaQice * countKoriSQica * 12;

  console.log(`${cost.toFixed(2)}`);
}

easterLunch(['3', '2', '3']);
