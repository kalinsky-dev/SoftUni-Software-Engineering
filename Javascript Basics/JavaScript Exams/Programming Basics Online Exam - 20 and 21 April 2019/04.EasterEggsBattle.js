function easterEggsBattle(input) {
  //     1.	Брой яйца, които има първият играч - цяло число в интервала [1 … 99]
  // 2.	Брой яйца, които има вторият играч - цяло число в интервала [1 … 99]
  // След това до получаване на команда "End of battle" се четe многократно един ред:
  // 3.	Победител - текст - "one" или "two"

  let index = 0;
  const eggsCountFirst = Number(input[index]);
  index++;
  const eggsCountSecond = Number(input[index]);
  index++;
  let text = input[index];
  let currentEggsFirstPlayer = eggsCountFirst;
  let currentEggsSecondPlayer = eggsCountSecond;

  while (text !== 'End of battle') {
    if (text === 'one') {
      currentEggsSecondPlayer--;
      if (currentEggsSecondPlayer === 0) {
        console.log(
          `Player two is out of eggs. Player one has ${currentEggsFirstPlayer} eggs left.`
        );
        break;
      }
    } else if (text === 'two') {
      currentEggsFirstPlayer--;
      if (currentEggsFirstPlayer === 0) {
        console.log(
          `Player one is out of eggs. Player two has ${currentEggsSecondPlayer} eggs left.`
        );
        break;
      }
    }

    index++;
    text = input[index];
  }
  if (text === 'End of battle') {
    console.log(`Player one has ${currentEggsFirstPlayer} eggs left.`);
    console.log(`Player two has ${currentEggsSecondPlayer} eggs left.`);
  }
}

// easterEggsBattle([
//   "5",
//   "4",
//   "one",
//   "two",
//   "one",
//   "two",
//   "two",
//   "End of battle",
// ]);

// easterEggsBattle(["2", "6", "one", "two", "two"]);
easterEggsBattle(['6', '3', 'one', 'two', 'two', 'one', 'one']);
