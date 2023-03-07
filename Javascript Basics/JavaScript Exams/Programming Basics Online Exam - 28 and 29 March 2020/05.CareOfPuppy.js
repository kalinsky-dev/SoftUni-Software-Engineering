function careOfPuppy(input) {
  //     •	Закупеното количество храна за кученцето в килограми – цяло число в интервала [1 …100]
  // •	На всеки следващ ред до получаване на команда Adopted ще получавате колко грама изяжда кученцето на всяко хранене
  //  - цяло число в интервала [10 …1000]
  let index = 0;
  const foodForAPuppy = Number(input[index]);
  index++;
  let foorInGrams = foodForAPuppy * 1000;
  let command = input[index];
  let currFoodEaten = 0;
  let allFoodEaten = 0;

  while (command !== 'Adopted') {
    currFoodEaten = Number(command);
    allFoodEaten += currFoodEaten;

    index++;
    command = input[index];
  }
  let diff = Math.abs(foorInGrams - allFoodEaten);
  if (foorInGrams >= allFoodEaten) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    console.log(`Food is not enough. You need ${diff} grams more.`);
  }
}

// careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
// careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(['2', '999', '456', '999', '999', '123', '456', 'Adopted']);
