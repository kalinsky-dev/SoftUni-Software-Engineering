function fitnessCard(input) {
  //     •	Сумата, с която разполагаме - реално число в интервала [10.00…1000.00]
  // •	Пол - символ ('m' за мъж и 'f' за жена)
  // •	Възраст - цяло число в интервала [5…105]
  // •	Спорт - текст (една от възможностите в таблицата)

  const sumAvailable = Number(input[0]);
  const sex = input[1];
  const age = Number(input[2]);
  const sport = input[3];
  let cartFintess = 0;

  //   Пол	     Gym	   Boxing	Yoga	Zumba	Dances	Pilates
  // мъж	     $42	    $41	    $45	     $34	$51	    $39
  // жена	     $35	    $37	     $42	$31   	$53	     $37

  switch (sex) {
    case 'm':
      switch (sport) {
        case 'Gym':
          cartFintess = 42;
          break;
        case 'Boxing':
          cartFintess = 41;
          break;
        case 'Yoga':
          cartFintess = 45;
          break;
        case 'Zumba':
          cartFintess = 34;
          break;
        case 'Dances':
          cartFintess = 51;
          break;
        case 'Pilates':
          cartFintess = 39;
          break;
      }
      break;
    case 'f':
      switch (sport) {
        case 'Gym':
          cartFintess = 35;
          break;
        case 'Boxing':
          cartFintess = 37;
          break;
        case 'Yoga':
          cartFintess = 42;
          break;
        case 'Zumba':
          cartFintess = 31;
          break;
        case 'Dances':
          cartFintess = 53;
          break;
        case 'Pilates':
          cartFintess = 37;
          break;
      }
      break;
  }
  if (age <= 19) {
    cartFintess *= 0.8;
  }
  let diff = Math.abs(cartFintess - sumAvailable);

  if (sumAvailable >= cartFintess) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${diff.toFixed(2)} more.`
    );
  }
}

// fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(['20', 'f', '15', 'Yoga']);
