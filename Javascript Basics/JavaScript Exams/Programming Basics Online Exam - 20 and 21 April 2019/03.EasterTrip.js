function easterTrip(input) {
  //     •	Първи ред - дестинация - текст с възможности"France", "Italy" или "Germany"
  // •	Втори ред - дати, през които си е резервирала екскурзията - текст  с възможности "21-23",
  // "24-27" или "28-31"
  // •	Трети ред - брой нощувки - цяло число в интервала [1… 100]

  //   Дестинация     	21-23 март	   24-27 март	28-31 март
  // Франция	                 30 лв.	   35 лв.	40 лв.
  // Италия	               28 лв.	   32 лв.	39 лв.
  // Германия	                32 лв.   	37 лв.	43 лв.

  const destination = input[0];
  const dates = input[1];
  const countNights = Number(input[2]);
  let priceNights = 0;

  switch (destination) {
    case 'France':
      switch (dates) {
        case '21-23':
          priceNights = 30;
          break;
        case '24-27':
          priceNights = 35;
          break;
        case '28-31':
          priceNights = 40;
          break;
      }
      break;
    case 'Italy':
      switch (dates) {
        case '21-23':
          priceNights = 28;
          break;
        case '24-27':
          priceNights = 32;
          break;
        case '28-31':
          priceNights = 39;
          break;
      }
      break;
    case 'Germany':
      switch (dates) {
        case '21-23':
          priceNights = 32;
          break;
        case '24-27':
          priceNights = 37;
          break;
        case '28-31':
          priceNights = 43;
          break;
      }
      break;
  }
  let cost = priceNights * countNights;
  console.log(`Easter trip to ${destination} : ${cost.toFixed(2)} leva.`);
}

easterTrip(['Germany', '24-27', '5']);
