function foodForPets(input) {
  //     Първоначално се чете един ред:
  // •	Брой дни – цяло число в диапазона [1…30]
  // •	Общо количество храна – реално число в диапазона [0.00…10000.00]
  // След това за всеки ден се чете:
  // o	Количество изядена храна от кучето – цяло число в диапазона [10…500]
  // o	Количество изядена храна от котката – цяло число в диапазона [10…500]

  index = 0;
  const countDays = Number(input[index]);
  index++;
  const foodQuontity = Number(input[index]);
  index++;

  let foodDog = 0;
  let foodCat = 0;
  let currFoodDog = 0;
  let currFoodCad = 0;

  let countBisquits = 0;
  let foodCatAndDog = 0;

  for (let i = 1; i <= countDays; i++) {
    currFoodDog = Number(input[index]);
    index++;
    currFoodCad = Number(input[index]);
    index++;
    if (i % 3 === 0) {
      countBisquits += 0.1 * (currFoodCad + currFoodDog);
    }
    foodDog += currFoodDog;
    foodCat += currFoodCad;
  }
  foodCatAndDog = foodCat + foodDog;

  //   •	"Total eaten biscuits: {количество изядени бисквитки}gr."
  // •	"{процент изядена храна}% of the food has been eaten."
  // •	"{процент изядена храна от кучето}% eaten from the dog."
  // •	"{процент изядена храна от котката}% eaten from the cat."

  console.log(`Total eaten biscuits: ${Math.round(countBisquits)}gr.`);
  console.log(
    `${((foodCatAndDog / foodQuontity) * 100).toFixed(
      2
    )}% of the food has been eaten.`
  );
  console.log(
    `${((foodDog / foodCatAndDog) * 100).toFixed(2)}% eaten from the dog.`
  );
  console.log(
    `${((foodCat / foodCatAndDog) * 100).toFixed(2)}% eaten from the cat.`
  );
}

// foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(['3', '500', '100', '30', '110', '25', '120', '35']);
