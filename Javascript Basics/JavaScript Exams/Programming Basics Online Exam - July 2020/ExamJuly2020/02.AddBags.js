function addBags(input) {
  // Цената на багаж над 20кг - реално число в диапазона [10.0…80.0]
  // 2. Килограми на багажа – реално число в диапазона [1.0…32.0]
  // 3. Дни до пътуването – цяло число в диапазона [1…60]
  // 4. Брой багажи – цяло число в диапазона [1…10]

  const luggageOver20KiloCost = Number(input[0]);
  const luggageKilo = Number(input[1]);
  const daysOfATravel = Number(input[2]);
  const luggageCount = Number(input[3]);
  let luggageCost = 0;

  //   Мими има закупени самолетни билети, но в последствие решава да си добави багаж към тях.
  //   Таксите за багаж се изчисляват въз основа на теглото на чекирания багаж:
  //    до 10кг – 20% от цената на багаж над 20кг
  //    между 10кг и 20кг вкл. – 50% от цената на багаж над 20кг.
  //    над 20кг – таксата се чете от конзолата
  //   В зависимост от броя на дните, които остават до пътуването, цената се оскъпява:
  //    повече от 30 дни - цената на багажа се оскъпява с 10%
  //    между 7 и 30 дни вкл. - цената на багажа се оскъпява с 15%
  //    по-малко от 7 дни - цената на багажа се оскъпява с 40%
  //   Напишете програма, която пресмята колко ще трябва да заплати Мими, спрямо горните условия.

  if (luggageKilo < 10) {
    luggageCost = 0.2 * luggageOver20KiloCost;
  } else if (luggageKilo >= 10 && luggageKilo <= 20) {
    luggageCost = 0.5 * luggageOver20KiloCost;
  } else if (luggageKilo > 20) {
    luggageCost = luggageOver20KiloCost;
  }

  if (daysOfATravel > 30) {
    luggageCost = 1.1 * luggageCost;
  } else if (daysOfATravel >= 7 && daysOfATravel <= 30) {
    luggageCost = 1.15 * luggageCost;
  } else if (daysOfATravel < 7) {
    luggageCost = 1.4 * luggageCost;
  }

  let cost = luggageCost * luggageCount;

  console.log(`The total price of bags is: ${cost.toFixed(2)} lv.`);
}

addBags(['30', '18', '15', '2']);
