function cinemaTickets(input) {
  //     Входът е поредица от цели числа и текст:
  // • На първия ред до получаване на командата "Finish" - име на филма – текст
  // • На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
  // • За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
  // o Типа на закупения билет - текст ("student", "standard", "kid")

  let filmName;
  const arrayLength = input.length;
  let studentCount = 0;
  let standardCount = 0;
  let kidCount = 0;
  let studentCount1 = 0;
  let standardCount1 = 0;
  let kidCount1 = 0;
  let percentUsed = 0;
  let counter = 0;

  for (let i = 0; i < arrayLength; i++) {
    filmName = input[i];
    let count = Number(input[i + 1]);
    let str = input[i + 2];

    for (let j = i + 2; j < arrayLength; j++) {
      // // След всеки филм да се отпечата, колко процента от кино залата е пълна
      // // "{името на филма} - {процент запълненост на залата}% full."
      // // • При получаване на командата "Finish" да се отпечатат четири реда:
      // // o "Total tickets: {общият брой закупени билети за всички филми}"
      // // o "{процент на студентските билети}% student tickets."
      // // o "{процент на стандартните билети}% standard tickets."
      // // o "{процент на детските билети}% kids tickets."

      counter = j;
      str = input[j];
      if (str === 'student') {
        studentCount++;
      } else if (str === 'standard') {
        standardCount++;
      } else if (str === 'kid') {
        kidCount++;
      } else if (str === 'End') {
        break;
      }
    }

    percentUsed = ((studentCount + standardCount + kidCount) / count) * 100;
    studentCount1 += studentCount;
    standardCount1 += standardCount;
    kidCount1 += kidCount;

    if (str === 'Finish') {
      console.log(`${filmName} - ${percentUsed.toFixed(2)}% full.`);
      console.log(
        `Total tickets: ${standardCount1 + studentCount1 + kidCount1}`
      );
      console.log(
        `${(
          (studentCount1 / (studentCount1 + standardCount1 + kidCount1)) *
          100
        ).toFixed(2)}% student tickets.`
      );
      console.log(
        `${(
          (standardCount1 / (studentCount1 + standardCount1 + kidCount1)) *
          100
        ).toFixed(2)}% standard tickets.`
      );
      console.log(
        `${(
          (kidCount1 / (studentCount1 + standardCount1 + kidCount1)) *
          100
        ).toFixed(2)}% kids tickets.`
      );
    } else {
      console.log(`${filmName} - ${percentUsed.toFixed(2)}% full.`);
    }

    studentCount = 0;
    standardCount = 0;
    kidCount = 0;
    i = counter;
  }
}

cinemaTickets([
  'The Matrix',
  '20',
  'student',
  'standard',
  'kid',
  'kid',
  'student',
  'student',
  'standard',
  'student',
  'End',
  'The Green Mile',
  '17',
  'student',
  'standard',
  'standard',
  'student',
  'standard',
  'student',
  'End',
  'Amadeus',
  '3',
  'standard',
  'standard',
  'standard',
  'Finish',
]);
