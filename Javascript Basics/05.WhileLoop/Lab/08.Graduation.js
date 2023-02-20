function graduation(input) {
  let index = 0;
  const nameStudent = input[index];
  index++;
  let currMark = 0;
  let currGrade = 0;
  let countFail = 0;
  let allMarks = 0;
  let allGrades = 0;
  let averageMark = 0;
  let isExcluded = false;

  while (allGrades < 12) {
    currMark = Number(input[index]);
    if (currMark >= 4) {
      currGrade++;
    } else {
      countFail++;
      if (countFail > 1) {
        console.log(
          `${nameStudent} has been excluded at ${currGrade + 1} grade`
        );
        isExcluded = true;
        break;
      }
    }
    allGrades = currGrade + countFail;
    allMarks += currMark;
    averageMark = allMarks / allGrades;
    index++;
  }
  if (!isExcluded) {
    console.log(
      `${nameStudent} graduated. Average grade: ${averageMark.toFixed(2)}`
    );
  }
}

graduation([
  'Gosho',
  '5',
  '5.5',
  '6',
  '5.43',
  '5.5',
  '6',
  '5.55',
  '5',
  '6',
  '6',
  '5.43',
  '5',
]);

// graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
