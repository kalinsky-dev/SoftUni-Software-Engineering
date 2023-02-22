function traveling(input) {
  let index = 0;

  let destination = '';
  let cost = 0;
  let moneyCurr = 0;
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    destination = input[i];
    cost = Number(input[i + 1]);
    if (destination === 'End') {
      break;
    }
    for (let j = i + 2; j < input.length; j++) {
      moneyCurr += Number(input[j]);
      counter = j;
      if (moneyCurr >= cost) {
        console.log(`Going to ${destination}!`);
        break;
      }
    }
    moneyCurr = 0;
    i = counter;
  }
}

traveling([
  'Greece',
  '1000',
  '200',
  '200',
  '300',
  '100',
  '150',
  '240',
  'Spain',
  '1200',
  '300',
  '500',
  '193',
  '423',
  'End',
]);

// traveling([
//   "France",
//   "2000",
//   "300",
//   "300",
//   "200",
//   "400",
//   "190",
//   "258",
//   "360",
//   "Portugal",
//   "1450",
//   "400",
//   "400",
//   "200",
//   "300",
//   "300",
//   "Egypt",
//   "1900",
//   "1000",
//   "280",
//   "300",
//   "500",
//   "End",
// ]);
