function fitnessCenter(input) {
  //     От конзолата се чете число, след това поредица от низове, всяко на отделен ред:
  // •	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
  // •	За всеки един посетител на отделен ред – дейността във фитнеса – текст
  // ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")

  const countPlayers = Number(input[0]);
  let command = '';
  let countBack = 0;
  let countChest = 0;
  let countLegs = 0;
  let countAbs = 0;
  let countProteinShake = 0;
  let countProteinBar = 0;
  let countPeopleToTrain = 0;
  let countPeopleToEat = 0;

  for (let i = 1; i <= countPlayers; i++) {
    command = input[i];
    switch (command) {
      case 'Back':
        countBack++;
        countPeopleToTrain++;
        break;
      case 'Chest':
        countChest++;
        countPeopleToTrain++;
        break;
      case 'Legs':
        countLegs++;
        countPeopleToTrain++;
        break;
      case 'Abs':
        countAbs++;
        countPeopleToTrain++;
        break;
      case 'Protein shake':
        countProteinShake++;
        countPeopleToEat++;
        break;
      case 'Protein bar':
        countProteinBar++;
        countPeopleToEat++;
        break;
    }
  }

  //   Ред 1 -	"{брой хора трениращи гръб} - back"
  //   Ред 2 -	"{брой хора трениращи гърди} - chest"
  //   Ред 3 -	"{брой хора трениращи крака} - legs"
  //   Ред 4 -	"{брой хора трениращи коремни мускули} - abs"
  //   Ред 5 -	"{брой хора закупили протеинов шейк} - protein shake"
  //   Ред 6 -	"{брой хора закупили протеинов блок} - protein bar"
  //   Ред 7 -	"{процент на хората дошли да тренират}% - work out"
  //   Ред 8 -	"{процент на хората дошли да купят протеин}% - protein"

  console.log(`${countBack} - back`);
  console.log(`${countChest} - chest`);
  console.log(`${countLegs} - legs`);
  console.log(`${countAbs} - abs`);
  console.log(`${countProteinShake} - protein shake`);
  console.log(`${countProteinBar} - protein bar`);
  console.log(
    `${((countPeopleToTrain / countPlayers) * 100).toFixed(2)}% - work out`
  );
  console.log(
    `${((countPeopleToEat / countPlayers) * 100).toFixed(2)}% - protein`
  );
}

// fitnessCenter([
//   "10",
//   "Back",
//   "Chest",
//   "Legs",
//   "Abs",
//   "Protein shake",
//   "Protein bar",
//   "Protein shake",
//   "Protein bar",
//   "Legs",
//   "Abs",
// ]);

fitnessCenter([
  '7',
  'Chest',
  'Back',
  'Legs',
  'Legs',
  'Abs',
  'Protein shake',
  'Protein bar',
]);
