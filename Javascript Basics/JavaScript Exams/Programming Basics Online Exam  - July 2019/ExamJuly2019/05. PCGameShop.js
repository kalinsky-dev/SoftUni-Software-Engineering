function pcGameShop(input) {
  const length = input.length;
  let countHearthstone = 0;
  let countFornite = 0;
  let countOverwatch = 0;
  let countOthers = 0;
  let nameOfTheGame = '';
  let allGames = 0;

  for (let i = 1; i < length; i++) {
    nameOfTheGame = input[i];
    if (nameOfTheGame === 'Hearthstone') {
      countHearthstone++;
    } else if (nameOfTheGame === 'Fornite') {
      countFornite++;
    } else if (nameOfTheGame === 'Overwatch') {
      countOverwatch++;
    } else {
      countOthers++;
    }
  }
  allGames = countHearthstone + countFornite + countOverwatch + countOthers;
  console.log(
    `Hearthstone - ${((countHearthstone / allGames) * 100).toFixed(2)}%`
  );
  console.log(`Fornite - ${((countFornite / allGames) * 100).toFixed(2)}%`);
  console.log(`Overwatch - ${((countOverwatch / allGames) * 100).toFixed(2)}%`);
  console.log(`Others - ${((countOthers / allGames) * 100).toFixed(2)}%`);
}

pcGameShop(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);
