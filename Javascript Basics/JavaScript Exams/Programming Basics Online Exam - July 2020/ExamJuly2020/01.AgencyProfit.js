function agencyProfit(input) {
  //     Име на авиокомпанията - текст
  // 2. Брой билети за възрастни – цяло число в диапазона [1…400]
  // 3. Брой детски билети – цяло число в диапазона [25…120]
  // 4. Нетна цена на билет за възрастен – реално число в диапазона [100.0…1600.0]
  // // 5. Цената на такса обслужване - реално число в диапазона [10.0…50.0]

  const name = input[0];
  const ticketsAdults = Number(input[1]);
  const ticketsChildren = Number(input[2]);
  const priceTicketsAdults = Number(input[3]);
  const priceForAService = Number(input[4]);

  //SOLUTION TO THE PROBLEM
  //   Напишете програма, която изчислява печалбата на агенция за продажба на самолетни билети.
  //    Агенцията продава самолетни билети на различни авиокомпании.
  //    Ще получите информация за броя продадени билети за възрастни и броя продадени детски билети.
  //     Нетната цена на билета за възрастен се определя от авиокомпанията, а детският билет е със 70% по-евтин.
  //      Агенцията добавя към нетната цена на всеки билет такса обслужване.
  // Крайната печалба на Агенцията е 20% от общата цена на всички билети.

  const priceTicketsChildren = 0.3 * priceTicketsAdults;
  const price =
    ticketsAdults * (priceTicketsAdults + priceForAService) +
    +ticketsChildren * (priceTicketsChildren + priceForAService);
  const profit = price * 0.2;

  console.log(
    `The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`
  );
}

agencyProfit(['WizzAir', '15', '5', '120', '40']);
