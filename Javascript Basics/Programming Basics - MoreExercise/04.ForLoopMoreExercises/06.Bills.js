function bills(input) {
  //     •	Първи ред – месеците за които се търси средният разход – цяло число в интервала [1...100]
  // •	За всеки месец – сметката за ток – реално число в интервала [1.00...1000.00]
  let index = 0;
  const monthCount = Number(input[index]);
  index++;

  //   •	За ток – всеки месец е различен, ще се чете от конзолата
  // •	за вода – 20 лв.
  // •	за интернет – 15 лв.
  // •	за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%.
  // За всеки разход трябва да се пресметне колко общо е платено за всички месеци.

  let taxTok = 0;
  const taxWater = 20;
  const taxInternet = 15;
  let taxOther = 0;
  let elAll = 0;
  let waterAll = 0;
  let internetAll = 0;
  let otherAll = 0;
  let allAll = 0;

  for (let i = 0; i < monthCount; i++) {
    taxTok = Number(input[index]);
    taxOther = (taxTok + taxWater + taxInternet) * 1.2;

    elAll += taxTok;
    waterAll += taxWater;
    internetAll += taxInternet;
    otherAll += taxOther;

    index++;
  }
  //   •	1ви ред: "Electricity: {ток за всички месеци} lv"
  //   •	2ри ред: "Water: {вода за всички месеци} lv"
  //   •	3ти ред: "Internet: {интернет за всички месеци} lv"
  //   •	4ти ред: "Other: {други за всички месеци} lv"
  //   •	5ти ред: "Average: {средно всички разходи за месец} lv"

  allAll = elAll + waterAll + internetAll + otherAll;
  let average = allAll / monthCount;
  console.log(`Electricity: ${elAll.toFixed(2)} lv`);
  console.log(`Water: ${waterAll.toFixed(2)} lv`);
  console.log(`Internet: ${internetAll.toFixed(2)} lv`);
  console.log(`Other: ${otherAll.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}

bills([
  '8',
  '123.54',
  '231.54',
  '140.23',
  '100',
  '122.4',
  '430',
  '178.52',
  '64.2',
]);
