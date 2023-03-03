function filmPremiere(input) {
  //     •	Първи ред - прожекция - текст с възможности"John Wick", "Star Wars" или "Jumanji"
  // •	Втори ред - пакет за филм - текст  с възможности "Drink", "Popcorn" или "Menu"
  // •	Трети ред - брой билети - цяло число в интервала [1… 30]

  const projection = input[0];
  const package = input[1];
  const ticketsCount = Number(input[2]);
  let price = 0;
  let finalPrice = 0;

  //                John Wick	    Star Wars	    Jumanji
  //   Напитка	   12 лв./бр.	 18 лв. /бр.	 9 лв. /бр.
  //   Пуканки	    15 лв. /бр.	  25 лв. /бр.	 11 лв. /бр.
  //   Меню	       19 лв. /бр.	  30 лв. /бр.	 14 лв. /бр.

  //   •	При избран филм "Star Wars" и закупени поне четири билета, има 30% семейна отстъпка.
  // •	При избран филм "Jumanji" и закупени точно два билета, има 15% отстъпка за двама

  switch (projection) {
    case 'John Wick':
      switch (package) {
        case 'Drink':
          price = 12;
          finalPrice = price * ticketsCount;
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
        case 'Popcorn':
          price = 15;
          finalPrice = price * ticketsCount;
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
        case 'Menu':
          price = 19;
          finalPrice = price * ticketsCount;
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
      }
      break;
    case 'Star Wars':
      switch (package) {
        case 'Drink':
          price = 18;
          finalPrice = price * ticketsCount;
          if (ticketsCount >= 4) {
            finalPrice *= 0.7;
          }
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
        case 'Popcorn':
          price = 25;
          finalPrice = price * ticketsCount;
          if (ticketsCount >= 4) {
            finalPrice *= 0.7;
          }
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
        case 'Menu':
          price = 30;
          finalPrice = price * ticketsCount;
          if (ticketsCount >= 4) {
            finalPrice *= 0.7;
          }
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
      }
      break;
    case 'Jumanji':
      switch (package) {
        case 'Drink':
          price = 9;
          finalPrice = price * ticketsCount;
          if (ticketsCount === 2) {
            finalPrice *= 0.85;
          }
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
        case 'Popcorn':
          price = 11;
          finalPrice = price * ticketsCount;
          if (ticketsCount === 2) {
            finalPrice *= 0.85;
          }
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
        case 'Menu':
          price = 14;
          finalPrice = price * ticketsCount;
          if (ticketsCount === 2) {
            finalPrice *= 0.85;
          }
          console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`);
          break;
      }
      break;
  }
}

filmPremiere(['Jumanji', 'Menu', '2']);
