function movieProfit(input) {
  //     1.	Име на филм - текст
  // 2.	Брой дни - цяло число в диапазона [1… 90]
  // 3.	Брой билети  - цяло число в диапазона [100… 100000]
  // 4.	Цена на билет - реално число в диапазона [5.0… 25.0]
  // 5.	Процент за киното - цяло число в диапазона [5... 35]

  const filmName = input[0];
  const days = Number(input[1]);
  const ticketsCount = Number(input[2]);
  const ticketPrice = Number(input[3]);
  const percentForTheKino = Number(input[4]) / 100;

  let price = 0;

  price = days * ticketPrice * ticketsCount * (1 - percentForTheKino);

  console.log(
    `The profit from the movie ${filmName} is ${price.toFixed(2)} lv.`
  );
}

movieProfit(['The Programmer', '20', '500', '7.50', '7']);
