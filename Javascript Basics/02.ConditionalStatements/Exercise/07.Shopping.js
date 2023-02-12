function shopping(input) {
  const budget = Number(input[0]);
  const videoCardsCount = Number(input[1]);
  const processorCount = Number(input[2]);
  const ramCount = Number(input[3]);

  const videoCardPrice = 250;
  const processorPrice = 0.35 * videoCardPrice * videoCardsCount;
  const ram = 0.1 * videoCardPrice * videoCardsCount;

  let totalPrice = 0;

  //     Петър иска да купи N видеокарти, M процесора и P на брой рам памет.
  //     Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка.
  //     Важат следните цени:

  totalPrice =
    videoCardsCount * videoCardPrice +
    processorCount * processorPrice +
    ram * ramCount;

  if (videoCardsCount > processorCount) {
    totalPrice *= 0.85;
  }

  const difference = Math.abs(budget - totalPrice);

  if (budget >= totalPrice) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${difference.toFixed(2)} leva more!`
    );
  }
}

shopping(['920.45', '3', '1', '1']);
