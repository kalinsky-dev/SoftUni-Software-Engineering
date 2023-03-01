function travelAgency(input) {
  // DA SE RESHI SUS SWITCH!!!

  const nameOfATown = input[0];
  const typeOfAPackage = input[1];
  const vip = input[2];
  const dayToStay = Number(input[3]);
  let cenaZaDen = 0;
  let cena = 0;

  if (nameOfATown === 'Bansko' || nameOfATown === 'Borovets') {
    if (typeOfAPackage === 'withEquipment') {
      cenaZaDen = 100;
      if (vip === 'yes') {
        cenaZaDen *= 0.9;
      }
    } else if (typeOfAPackage === 'noEquipment') {
      cenaZaDen = 80;
      if (vip === 'yes') {
        cenaZaDen *= 0.95;
      }
    }
  } else if (nameOfATown === 'Varna' || nameOfATown === 'Burgas') {
    if (typeOfAPackage === 'withBreakfast') {
      cenaZaDen = 130;
      if (vip === 'yes') {
        cenaZaDen *= 0.88;
      }
    } else if (typeOfAPackage === 'noBreakfast') {
      cenaZaDen = 100;
      if (vip === 'yes') {
        cenaZaDen *= 0.93;
      }
    }
  }
  if (dayToStay > 7) {
    dayToStay--;
  }
  cena = cenaZaDen * dayToStay;

  if (
    (typeOfAPackage === 'withEquipment' ||
      typeOfAPackage === 'noEquipment' ||
      typeOfAPackage === 'withBreakfast' ||
      typeOfAPackage === 'noBreakfast') &&
    (nameOfATown === 'Bansko' ||
      nameOfATown === 'Borovets' ||
      nameOfATown === 'Varna' ||
      nameOfATown === 'Burgas') &&
    (vip === 'yes' || vip === 'no')
  ) {
    if (dayToStay < 1) {
      console.log('Days must be positive number!');
    } else {
      console.log(`The price is ${cena.toFixed(2)}lv! Have a nice time!`);
    }
  } else {
    console.log('Invalid input!');
  }
}

travelAgency(['Varna', 'noEquipment', 'yes', '1']);
