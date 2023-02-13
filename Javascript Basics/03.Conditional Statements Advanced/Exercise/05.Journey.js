function joinery(input) {
  // •	Първи– Бюджет, реално число в интервала [10.00...5000.00].
  // •	Втори–  Един от двата възможни сезона: "summer" или "winter"
  let budget = Number(input[0]);
  const season = input[1];

  //   •	При 100лв. или по-малко – някъде в България
  // o	Лято – 30% от бюджета
  // o	Зима – 70% от бюджета
  // •	При 1000лв. или по малко – някъде на Балканите
  // o	Лято – 40% от бюджета
  // o	Зима – 80% от бюджета
  // •	При повече от 1000лв. – някъде из Европа
  // o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.

  if (budget > 1000) {
    budget *= 0.9;
    console.log(`Somewhere in Europe`);
    console.log(`Hotel - ${budget.toFixed(2)}`);
  } else if (budget > 100) {
    if (season === 'summer') {
      budget *= 0.4;
      console.log(`Somewhere in Balkans`);
      console.log(`Camp - ${budget.toFixed(2)}`);
    } else {
      budget *= 0.8;
      console.log(`Somewhere in Balkans`);
      console.log(`Hotel - ${budget.toFixed(2)}`);
    }
  } else {
    if (season === 'summer') {
      budget *= 0.3;
      console.log(`Somewhere in Bulgaria`);
      console.log(`Camp - ${budget.toFixed(2)}`);
    } else {
      budget *= 0.7;
      console.log(`Somewhere in Bulgaria`);
      console.log(`Hotel - ${budget.toFixed(2)}`);
    }
  }
}

joinery(['1500', 'summer']);
