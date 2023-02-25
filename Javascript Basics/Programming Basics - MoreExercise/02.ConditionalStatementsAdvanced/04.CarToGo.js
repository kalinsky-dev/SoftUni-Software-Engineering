function carToGo(input) {
  //     •	Първи ред – Бюджет – реално число в интервала [10.00...10000.00]
  // •	Втори ред –  Сезон – текст "Summer" или "Winter"

  const budget = Number(input[0]);
  const season = input[1];
  let klas = '';
  let cartype = '';
  let carCena = 0;

  if (budget <= 100) {
    klas = 'Economy class';
    if (season === 'Summer') {
      cartype = 'Cabrio';
      carCena = 0.35 * budget;
    } else if (season === 'Winter') {
      cartype = 'Jeep';
      carCena = 0.65 * budget;
    }
  } else if (budget > 100 && budget <= 500) {
    klas = 'Compact class';
    if (season === 'Summer') {
      cartype = 'Cabrio';
      carCena = 0.45 * budget;
    } else if (season === 'Winter') {
      cartype = 'Jeep';
      carCena = 0.8 * budget;
    }
  } else {
    klas = 'Luxury class';
    cartype = 'Jeep';
    carCena = 0.9 * budget;
  }
  console.log(`${klas}`);
  console.log(`${cartype} - ${carCena.toFixed(2)}`);
}

carToGo(['450', 'Winter']);
