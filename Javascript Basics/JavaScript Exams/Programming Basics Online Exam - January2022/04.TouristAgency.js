function touristAgency(input) {
  // 1.	Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
  // 2.	Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
  // 3.	Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
  // 4.	Дни за престой - цяло число в интервала [1 … 10000]

  const nameOfATown = input[0];
  const typeOfAPackage = input[1];
  const vipOrNot = input[2];
  let countOfTheStay = Number(input[3]);
  let priceForADay = 0;
  let totalPrice = 0;

  //   Цена за ден	         Банско/Боровец	                             Варна/Бургас
  //                       с екипировка без екипировка	              със закуска	без закуска
  //                         100лв.	      80лв	                   130лв.	        100лв.
  // VIP отстъпка	            10%	           5%	                    12%	               7%

  if (
    (nameOfATown !== 'Bansko' &&
      nameOfATown !== 'Borovets' &&
      nameOfATown !== 'Varna' &&
      nameOfATown !== 'Burgas') ||
    (typeOfAPackage !== 'noEquipment' &&
      typeOfAPackage !== 'withEquipment' &&
      typeOfAPackage !== 'noBreakfast' &&
      typeOfAPackage !== 'withBreakfast')
  ) {
    console.log(`Invalid input!`);
  } else {
    switch (nameOfATown) {
      case 'Bansko':
      case 'Borovets':
        switch (typeOfAPackage) {
          case 'withEquipment':
            priceForADay = 100;
            if (vipOrNot === 'yes') {
              priceForADay *= 0.9;
            }
            break;
          case 'noEquipment':
            priceForADay = 80;
            if (vipOrNot === 'yes') {
              priceForADay *= 0.95;
            }
            break;
        }
        break;
      case 'Varna':
      case 'Burgas':
        switch (typeOfAPackage) {
          case 'withBreakfast':
            priceForADay = 130;
            if (vipOrNot === 'yes') {
              priceForADay *= 0.88;
            }
            break;
          case 'noBreakfast':
            priceForADay = 100;
            if (vipOrNot === 'yes') {
              priceForADay *= 0.93;
            }
            break;
        }
        break;
    }
    if (countOfTheStay > 7) {
      countOfTheStay--;
    }
    if (countOfTheStay < 1) {
      console.log(`Days must be positive number!`);
    } else {
      totalPrice = countOfTheStay * priceForADay;
      console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    }
  }
}

// touristAgency(["Borovets", "noEquipment", "yes", "6"]);
// touristAgency(["Bansko", "withEquipment", "no", "2"]);

// touristAgency(["Varna", "withBreakfast", "yes", "5"]);

// touristAgency(["Burgas", "noBreakfast", "no", "4"]);

// touristAgency(["Varna", "withBreakfast", "no", "0"]);
touristAgency(['Gabrovo', 'noBreakfast', 'no', '3']);
