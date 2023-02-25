function vacation(input) {
  //     Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, локацията и мястото на настаняване за ваканция.
  //      Сезоните са лято и зима – "Summer" и "Winter". Локациите са – "Alaska" и "Morocco".
  //      Възможните места за настаняване – "Hotel", "Hut" или "Camp".
  // •	При бюджет по-малък или равен от 1000лв.:
  // o	Настаняване в "Camp"
  // o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
  // 	Лято – Аляска – 65% от бюджета
  // 	Зима – Мароко – 45% от бюджета
  // •	При бюджет по-голям от 1000лв. и по-малък или равен от 3000лв.:
  // o	Настаняване в "Hut"
  // o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
  // 	Лято – Аляска – 80% от бюджета
  // 	Зима – Мароко – 60% от бюджета
  // •	При бюджет по-голям от 3000лв.:
  // o	Настаняване в "Hotel"
  // o	Според сезона локацията ще е една от следните и ще струва 90% от бюджета:
  // 	Лято – Аляска
  // 	Зима – Мароко
  const budget = Number(input[0]);
  const season = input[1];
  let price = 0;
  let nastanqvane = '';
  let location = '';

  if (budget <= 1000) {
    nastanqvane = 'Camp';
    if (season === 'Summer') {
      location = 'Alaska';
      price = 0.65 * budget;
    } else if (season === 'Winter') {
      location = 'Morocco';
      price = 0.45 * budget;
    }
  } else if (budget <= 3000 && budget > 1000) {
    nastanqvane = 'Hut';
    if (season === 'Summer') {
      location = 'Alaska';
      price = 0.8 * budget;
    } else if (season === 'Winter') {
      location = 'Morocco';
      price = 0.6 * budget;
    }
  } else if (budget > 3000) {
    nastanqvane = 'Hotel';
    if (season === 'Summer') {
      location = 'Alaska';
      price = 0.9 * budget;
    } else if (season === 'Winter') {
      location = 'Morocco';
      price = 0.9 * budget;
    }
  }
  console.log(`${location} - ${nastanqvane} - ${price.toFixed(2)}`);
}

vacation(['3460', 'Summer']);
