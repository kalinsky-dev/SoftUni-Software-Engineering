function seriesCalculator(input) {
  const nameOfTheFilm = input[0];
  const seasonsCount = Number(input[1]);
  const episodsCount = Number(input[2]);
  const timingOfTheEpizodsWithoutAdvertisment = Number(input[3]);

  let time = 0;
  time =
    episodsCount * timingOfTheEpizodsWithoutAdvertisment * 1.2 * seasonsCount;
  time += seasonsCount * 10;

  console.log(
    `Total time needed to watch the ${nameOfTheFilm} series is ${Math.floor(
      time
    )} minutes.`
  );
}

seriesCalculator(['Riverdale', '3', '21', '45']);
