function salary(input) {
  //     •	Брой отворени табове в браузъра n - цяло число в интервала [1...10]
  // •	Заплата - число в интервала [500...1500]
  // След това n – на брой пъти се чете име на уебсайт – текст
  let index = 0;
  const openTabs = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
  let fine = 0;
  let nameSite = '';
  let isHaveSalary = true;

  for (let i = 0; i < openTabs; i++) {
    if (isHaveSalary === false) {
      break;
    }
    nameSite = input[index];
    index++;
    switch (nameSite) {
      case 'Facebook':
        fine = 150;
        money = money - fine;
        if (money <= 0) {
          console.log(`You have lost your salary.`);
          isHaveSalary = false;
        }
        break;
      case 'Instagram':
        fine = 100;
        money = money - fine;
        if (money <= 0) {
          console.log(`You have lost your salary.`);
          isHaveSalary = false;
        }
        break;
      case 'Reddit':
        fine = 50;
        money = money - fine;
        if (money <= 0) {
          console.log(`You have lost your salary.`);
          isHaveSalary = false;
        }
        break;
    }
  }
  if (isHaveSalary === true) {
    console.log(`${money}`);
  }
}

// salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
salary([
  '10',
  '750',
  'Facebook',
  'Dev.bg',
  'Instagram',
  'Facebook',
  'Reddit',
  'Facebook',
  'Facebook',
]);
