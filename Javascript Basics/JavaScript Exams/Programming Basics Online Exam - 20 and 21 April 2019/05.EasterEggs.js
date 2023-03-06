function easterEggs(input) {
  //     •	 Броят на боядисаните яйца – цяло число в интервала [1 ... 100]
  // За всяко яйце се чете:
  // o	Цветът на яйцето – текст с възможности: "red", "orange", "blue", "green"

  let index = 0;
  const eggsCount = Number(input[index]);
  index++;
  let colorCurrentEgg = '';
  let redEggs = 0;
  let orangeEggs = 0;
  let blueEggs = 0;
  let greenEggs = 0;
  let maxEggs = 0;
  let colorMaxEggs = '';

  for (let i = 0; i < eggsCount; i++) {
    colorCurrentEgg = input[index];
    switch (colorCurrentEgg) {
      case 'red':
        redEggs++;
        if (redEggs > maxEggs) {
          maxEggs = redEggs;
          colorMaxEggs = 'red';
        }
        break;
      case 'orange':
        orangeEggs++;
        if (orangeEggs > maxEggs) {
          maxEggs = orangeEggs;
          colorMaxEggs = 'orange';
        }
        break;
      case 'blue':
        blueEggs++;
        if (blueEggs > maxEggs) {
          maxEggs = blueEggs;
          colorMaxEggs = 'blue';
        }
        break;
      case 'green':
        greenEggs++;
        if (greenEggs > maxEggs) {
          maxEggs = greenEggs;
          colorMaxEggs = 'green';
        }
        break;
    }
    index++;
  }
  //   •	"Red eggs: {брой на червените яйца}"
  // •	"Orange eggs: {брой на оранжевите яйца}"
  // •	"Blue eggs: {брой на сините яйца}"
  // •	"Green eggs: {брой на зелените яйца}"
  // •	"Max eggs: {максимален брой на яйцата от цвят} -> {цвят}"

  console.log(`Red eggs: ${redEggs}`);
  console.log(`Orange eggs: ${orangeEggs}`);
  console.log(`Blue eggs: ${blueEggs}`);
  console.log(`Green eggs: ${greenEggs}`);
  console.log(`Max eggs: ${maxEggs} -> ${colorMaxEggs}`);
}

// easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(['4', 'blue', 'red', 'blue', 'orange']);
