function trapeziodArea(input) {
  // Напишете програма, която чете от конзолата три числа b1, b2 и h и пресмята лицето на трапец с основи b1 и b2 и височина h.
  // Формулата за лице на трапец е (b1 + b2) * h / 2.

  const b1 = Number(input[0]);
  const b2 = Number(input[1]);
  const h = Number(input[2]);

  const area = ((b1 + b2) * h) / 2;

  console.log(area.toFixed(2));
}

trapeziodArea(['8', '13', '7']);
