function skiTrip(input) {
  //     •	Първи ред - дни за престой - цяло число в интервала [0...365]
  // •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
  // •	Трети ред - оценка - "positive"  или "negative"

  const dayOfStay = Number(input[0]);
  const typeOfRoom = input[1];
  const mark = input[2];

  //   	"room for one person" – 18.00 лв за нощувка
  // 	"apartment" – 25.00 лв за нощувка
  // 	"president apartment" – 35.00 лв за нощувка

  const costOfRoom = 18;
  const costApartment = 25;
  const costPresidentApartment = 35;
  let price = 0;

  switch (typeOfRoom) {
    case 'room for one person':
      price = (dayOfStay - 1) * costOfRoom;
      break;
    case 'apartment':
      price = (dayOfStay - 1) * costApartment;
      if (dayOfStay > 15) {
        price *= 0.5;
      } else if (dayOfStay >= 10) {
        price *= 0.65;
      } else {
        price *= 0.7;
      }
      break;
    case 'president apartment':
      price = (dayOfStay - 1) * costPresidentApartment;
      if (dayOfStay > 15) {
        price *= 0.8;
      } else if (dayOfStay >= 10) {
        price *= 0.85;
      } else {
        price *= 0.9;
      }
      break;
  }
  if (mark === 'positive') {
    price += 0.25 * price;
  } else {
    price -= 0.1 * price;
  }
  console.log(price.toFixed(2));
}

skiTrip(['2', 'apartment', 'positive']);
