function trainTheTrainers(input) {
  let index = 0;

  let countTrainers = Number(input[index]);
  index++;
  let command = input[index];
  let currNum = 0;
  let currResult = 0;
  let counterStudents = 0;
  let nameOfPresentation = '';
  let allResults = 0;

  while (command !== 'Finish') {
    nameOfPresentation = command;
    counterStudents++;
    for (let i = 1; i <= countTrainers; i++) {
      index++;
      currNum = Number(input[index]);
      currResult += currNum;
    }
    allResults += currResult;
    console.log(
      `${nameOfPresentation} - ${(currResult / countTrainers).toFixed(2)}.`
    );
    nameOfPresentation = '';
    currResult = 0;
    index++;
    command = input[index];
  }
  console.log(
    `Student's final assessment is ${(
      allResults /
      counterStudents /
      countTrainers
    ).toFixed(2)}.`
  );
}

trainTheTrainers([
  '3',
  'Arrays',
  '4.53',
  '5.23',
  '5.00',
  'Lists',
  '5.83',
  '6.00',
  '5.42',
  'Finish',
]);
