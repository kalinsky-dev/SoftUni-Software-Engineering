function oscar(input) {
  //     •	Име на актьора - текст
  // •	Точки от академията - реално число в интервала [2.0... 450.5]
  // •	Брой оценяващи n - цяло число в интервала[1… 20]
  // На следващите n-на брой реда:
  // Име на оценяващия - текст
  // Точки от оценяващия - реално число в интервала [1.0... 50.0]

  let index = 0;
  const nameOfActor = input[index];
  index++;
  let mark = Number(input[index]);
  index++;
  const people = Number(input[index]);
  index++;
  let nameOfPeople = '';
  let isNominated = false;
  let currMark = 0;

  for (let i = 0; i < people; i++) {
    nameOfPeople = input[index];
    index++;
    currMark = Number(input[index]);
    index++;
    currMark = (nameOfPeople.length * currMark) / 2;
    mark += currMark;
    if (mark >= 1250.5) {
      console.log(
        `Congratulations, ${nameOfActor} got a nominee for leading role with ${mark.toFixed(
          1
        )}!`
      );
      isNominated = true;
      break;
    }
  }
  let diff = Math.abs(mark - 1250.5);
  if (isNominated == false) {
    console.log(`Sorry, ${nameOfActor} you need ${diff.toFixed(1)} more!`);
  }
}

oscar([
  'Sandra Bullock',
  '340',
  '5',
  'Robert De Niro',
  '50',
  'Julia Roberts',
  '40.5',
  'Daniel Day-Lewis',
  '39.4',
  'Nicolas Cage',
  '29.9',
  'Stoyanka Mutafova',
  '33',
]);
