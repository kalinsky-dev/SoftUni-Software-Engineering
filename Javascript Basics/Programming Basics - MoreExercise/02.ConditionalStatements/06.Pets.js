function pets(input) {
  //     •	Първи ред – брой дни – цяло число в интервал [1…5000]
  // •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
  // •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
  // •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
  // •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]

  const days = Number(input[0]);
  const foodInKg = Number(input[1]);
  const foodForADog = Number(input[2]);
  const foodForACat = Number(input[3]);
  const foodForATurtle = Number(input[4]) / 1000;

  const foodForAllAnimals = (foodForACat + foodForADog + foodForATurtle) * days;
  const difference = Math.abs(foodInKg - foodForAllAnimals);
  if (foodForAllAnimals > foodInKg) {
    console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
  } else {
    console.log(`${Math.floor(difference)} kilos of food left.`);
  }
}

pets(['5', '10', '2.1', '0.8', '321']);
