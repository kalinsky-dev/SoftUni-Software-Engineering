function schoolCamp(input) {
  //     1.	Сезонът – текст - “Winter”, “Spring” или “Summer”;
  // 2.	Видът на групата – текст - “boys”, “girls” или “mixed”;
  // 3.	Брой на учениците – цяло число в интервала [1 … 10000];
  // 4.	Брой на нощувките – цяло число в интервала [1 … 100].

  const season = input[0];
  const typeOfAGroup = input[1];
  const studentsCount = Number(input[2]);
  const noshtuvki = Number(input[3]);
  let cenaNoshtuvka = 0;
  let typeOfASport = '';
  let cena = 0;

  if (season === 'Winter') {
    if (typeOfAGroup === 'boys' || typeOfAGroup === 'girls') {
      cenaNoshtuvka = 9.6;
    } else if (typeOfAGroup === 'mixed') {
      cenaNoshtuvka = 10;
    }
  } else if (season === 'Spring') {
    if (typeOfAGroup === 'boys' || typeOfAGroup === 'girls') {
      cenaNoshtuvka = 7.2;
    } else if (typeOfAGroup === 'mixed') {
      cenaNoshtuvka = 9.5;
    }
  } else if (season === 'Summer') {
    if (typeOfAGroup === 'boys' || typeOfAGroup === 'girls') {
      cenaNoshtuvka = 15;
    } else if (typeOfAGroup === 'mixed') {
      cenaNoshtuvka = 20;
    }
  }

  if (season === 'Winter') {
    if (typeOfAGroup === 'girls') {
      typeOfASport = 'Gymnastics';
    } else if (typeOfAGroup === 'boys') {
      typeOfASport = 'Judo';
    } else if (typeOfAGroup === 'mixed') {
      typeOfASport = 'Ski';
    }
  } else if (season === 'Spring') {
    if (typeOfAGroup === 'girls') {
      typeOfASport = 'Athletics';
    } else if (typeOfAGroup === 'boys') {
      typeOfASport = 'Tennis';
    } else if (typeOfAGroup === 'mixed') {
      typeOfASport = 'Cycling';
    }
  } else if (season === 'Summer') {
    if (typeOfAGroup === 'girls') {
      typeOfASport = 'Volleyball';
    } else if (typeOfAGroup === 'boys') {
      typeOfASport = 'Football';
    } else if (typeOfAGroup === 'mixed') {
      typeOfASport = 'Swimming';
    }
  }

  cena = cenaNoshtuvka * noshtuvki * studentsCount;

  if (studentsCount >= 50) {
    cena *= 0.5;
  } else if (studentsCount >= 20 && studentsCount < 50) {
    cena *= 0.85;
  } else if (studentsCount >= 10 && studentsCount < 20) {
    cena *= 0.95;
  }
  console.log(`${typeOfASport} ${cena.toFixed(2)} lv.`);
}

schoolCamp(['Spring', 'mixed', '17', '14']);
