function bestPlayer(input) {
  const count = input.length;
  let goals = 0;
  let currentGoals = 0;
  let i = 0;
  let name = input[i];

  while (i < count && name !== 'END') {
    currentGoals = Number(input[i + 1]);
    if (currentGoals > goals) {
      goals = currentGoals;
      name = input[i];
    }
    i = i + 2;
  }
  //   На първия ред:
  // "{име на играч} is the best player!"
  //  На втория ред :
  // o Ако най-добрият футболист е направил хеттрик:
  // "He has scored {брой голове} goals and made a hat-trick !!!"
  // o Ако най-добрият футболист не е направил хеттрик:
  // "He has scored {брой голове} goals."

  console.log(`${name} is the best player!`);
  if (goals >= 3) {
    console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${goals} goals.`);
  }
}

bestPlayer(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END']);
