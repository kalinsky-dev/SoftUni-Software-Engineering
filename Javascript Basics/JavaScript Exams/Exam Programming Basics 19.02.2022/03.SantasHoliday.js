function santasHoliday(input) {
  //     •	Първи ред – дни за престой – цяло число в интервала [0...365]
  // •	Втори ред –  вид помещение –  "room for one person",  "apartment" или "president apartment"
  // •	Трети ред –  оценка - "positive"  или "negative"

  let dayToStay = Number(input[0]);
  const typeOfRoom = input[1];
  const typeOfMark = input[2];

  let price = 0;

  switch (typeOfRoom) {
    case 'room for one person':
      price = (dayToStay - 1) * 18;
      break;
    case 'apartment':
      if (dayToStay > 15) {
        price = (dayToStay - 1) * 25;
        price *= 0.5;
      } else if (dayToStay >= 10) {
        price = (dayToStay - 1) * 25;
        price *= 0.65;
      } else {
        price = (dayToStay - 1) * 25;
        price *= 0.7;
      }
      break;
    case 'president apartment':
      if (dayToStay > 15) {
        price = (dayToStay - 1) * 35;
        price *= 0.8;
      } else if (dayToStay >= 10) {
        price = (dayToStay - 1) * 35;
        price *= 0.85;
      } else {
        price = (dayToStay - 1) * 35;
        price *= 0.9;
      }
      break;
  }

  if (typeOfMark === 'positive') {
    price *= 1.25;
  } else {
    price *= 0.9;
  }

  console.log(`${price.toFixed(2)}`);
}

santasHoliday(['14', 'apartment', 'positive']);
