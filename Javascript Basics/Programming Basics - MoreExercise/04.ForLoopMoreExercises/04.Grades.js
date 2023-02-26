function grades(input) {
  //     •	На първия ред – броя на студентите явили се на изпит – цяло число в интервала [1...1000]
  // •	За всеки един студент на отделен ред – оценката от изпита – реално число в интервала [2.00...6.00]
  let index = 0;
  const countStudents = Number(input[index]);
  index++;
  let currGrade = 0;
  let gradeAll = 0;
  let students5 = 0;
  let students4 = 0;
  let students3 = 0;
  let students2 = 0;

  for (let i = 0; i < countStudents; i++) {
    currGrade = Number(input[index]);
    if (currGrade >= 5) {
      students5++;
      gradeAll += currGrade;
    } else if (currGrade >= 4) {
      students4++;
      gradeAll += currGrade;
    } else if (currGrade >= 3) {
      students3++;
      gradeAll += currGrade;
    } else if (currGrade >= 2) {
      students2++;
      gradeAll += currGrade;
    }
    index++;
  }

  //   Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
  // Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
  // Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
  // Ред 4 -	"Fail: {по-малко от 3.00}%"
  // Ред 5 -	"Average: {среден успех}"

  let percentage5 = (students5 / countStudents) * 100;
  let percentage4 = (students4 / countStudents) * 100;
  let percentage3 = (students3 / countStudents) * 100;
  let percentage2 = (students2 / countStudents) * 100;
  let average = gradeAll / countStudents;

  console.log(`Top students: ${percentage5.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentage4.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentage3.toFixed(2)}%`);
  console.log(`Fail: ${percentage2.toFixed(2)}%`);
  console.log(`Average: ${average.toFixed(2)}`);
}

grades(['6', '2', '3', '4', '5', '6', '2.2']);
