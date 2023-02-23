// Напишете програма, която чете от конзолата страна и височина на триъгълник и пресмята неговото лице.
// Използвайте формулата за лице на триъгълник: area = a * h / 2. Форматирате изхода до втория знак след десетичната запетая.

function triangleArea(input) {
  const a = Number(input[0]);
  const h = Number(input[1]);

  const area = (a * h) / 2;

  console.log(area.toFixed(2));
}

triangleArea(['20', '30']);
