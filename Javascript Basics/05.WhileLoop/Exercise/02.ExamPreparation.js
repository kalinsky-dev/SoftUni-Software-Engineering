function examPreparation(input) {
  let index = 0;
  const badMarks = Number(input[index]);
  index++;
  let currTask = input[index];
  let markOfTask = 0;
  let allMarks = 0;
  let countMarks = 0;
  let countBadMarks = 0;
  let hasBadMarks = false;
  let lastTask = '';

  while (currTask !== 'Enough') {
    lastTask = currTask;
    index++;
    markOfTask = Number(input[index]);
    countMarks++;
    if (markOfTask > 4) {
      allMarks += markOfTask;
      index++;
      currTask = input[index];
    } else {
      countBadMarks++;
      if (countBadMarks === badMarks) {
        console.log(`You need a break, ${countBadMarks} poor grades.`);
        hasBadMarks = true;
        break;
      }
      allMarks += markOfTask;
      index++;
      currTask = input[index];
    }
  }
  let averageMark = allMarks / countMarks;
  if (!hasBadMarks) {
    console.log(`Average score: ${averageMark.toFixed(2)}`);
    console.log(`Number of problems: ${countMarks}`);
    console.log(`Last problem: ${lastTask}`);
  }
}

// examPreparation([
//   "3",
//   "Money",
//   "6",
//   "Story",
//   "4",
//   "Spring Time",
//   "5",
//   "Bus",
//   "6",
//   "Enough",
// ]);

examPreparation(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']);
