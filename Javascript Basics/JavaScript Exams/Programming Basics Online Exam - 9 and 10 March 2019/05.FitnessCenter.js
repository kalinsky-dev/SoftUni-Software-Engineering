function fitnessCenter(input) {
  //     •	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
  // •	За всеки един посетител на отделен ред – дейността във фитнеса –
  // текст ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")

  const countGuys = Number(input[0]);
  let activity = '';
  let trainingBack = 0;
  let trainingChest = 0;
  let trainingLegs = 0;
  let trainingAbs = 0;
  let countProteinShake = 0;
  let countProteinBar = 0;
  let peopleToTrain = 0;
  let peopleToEat = 0;

  for (let i = 1; i <= countGuys; i++) {
    activity = input[i];
    switch (activity) {
      case 'Back':
        trainingBack++;
        peopleToTrain++;
        break;
      case 'Chest':
        trainingChest++;
        peopleToTrain++;
        break;
      case 'Legs':
        trainingLegs++;
        peopleToTrain++;
        break;
      case 'Abs':
        trainingAbs++;
        peopleToTrain++;
        break;
      case 'Protein shake':
        countProteinShake++;
        peopleToEat++;
        break;
      case 'Protein bar':
        countProteinBar++;
        peopleToEat++;
        break;
    }
  }
  peopleToTrain = (peopleToTrain / countGuys) * 100;
  peopleToEat = (peopleToEat / countGuys) * 100;

  console.log(`${trainingBack} - back`);
  console.log(`${trainingChest} - chest`);
  console.log(`${trainingLegs} - legs`);
  console.log(`${trainingLegs} - abs`);
  console.log(`${countProteinShake} - protein shake`);
  console.log(`${countProteinShake} - protein bar`);
  console.log(`${peopleToTrain.toFixed(2)}% - work out`);
  console.log(`${peopleToEat.toFixed(2)}% - protein`);
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
