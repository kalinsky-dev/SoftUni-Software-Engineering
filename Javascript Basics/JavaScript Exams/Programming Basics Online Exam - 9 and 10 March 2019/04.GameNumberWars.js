function gameNumberWars(input) {
  //     •	Име на първия играч - текст
  // •	Име на втория играч - текст
  // След това, до получаване на команда "End of game", се четат многократно по два реда:
  // 1.	Карта, която дава първият играч- цяло число в интервала [2…9]
  // 2.	Карта, която дава вторият играч -  цяло число в интервала [2…9]
  // При еднакви карти на двамата играчи се прочитат нови два реда (карта, която дава първият и карта, която дава вторият.)

  const length = input.length;
  const nameFirst = input[0];
  const nameSecond = input[1];
  let firstCard = 0;
  let secondCard = 0;
  let pointsFirst = 0;
  let pointsSecond = 0;

  for (let i = 2; i < length; i += 2) {
    firstCard = input[i];
    if (firstCard === 'End of game') {
      console.log(`${nameFirst} has ${pointsFirst} points`);
      console.log(`${nameSecond} has ${pointsSecond} points`);
      break;
    }
    firstCard = Number(input[i]);
    secondCard = Number(input[i + 1]);

    if (firstCard > secondCard) {
      pointsFirst += firstCard - secondCard;
    } else if (firstCard < secondCard) {
      pointsSecond += secondCard - firstCard;
    } else {
      console.log('Number wars!');
      firstCard = Number(input[i + 2]);
      secondCard = Number(input[i + 3]);
      if (firstCard > secondCard) {
        console.log(`${nameFirst} is winner with ${pointsFirst} points`);
      } else {
        console.log(`${nameSecond} is winner with ${pointsSecond} points`);
      }
      break;
    }
  }
}

gameNumberWars([
  'Aleks',
  'Georgi',
  '4',
  '5',
  '3',
  '2',
  '4',
  '3',
  '4',
  '4',
  '5',
  '2',
]);
