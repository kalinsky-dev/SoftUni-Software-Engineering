function movieRating(input) {
  //     Брой филми, които си е набелязала Деси – цяло число в интервала [1…20]
  // За всеки филм се прочитат два отделни реда:
  // • Име на филма – текст
  // • Рейтинг на филма - реално число в интервала [1.00…10.00]

  const countFilms = Number(input[0]);
  let highestRatingFilm;
  let lowestRatingFilm;
  let averageRaitingOfAll;
  let averageRateOfAFilm = 0;
  let currentRating = 0;
  let highestRating = 0;
  let lowestRating = Number(input[2]);

  for (let i = 2; i <= countFilms * 2; i = i + 2) {
    currentRating = Number(input[i]);
    averageRateOfAFilm += currentRating;
    if (highestRating < currentRating) {
      highestRating = currentRating;
      highestRatingFilm = input[i - 1];
    }
    if (lowestRating > currentRating) {
      lowestRating = currentRating;
      lowestRatingFilm = input[i - 1];
    }
  }

  //   console.log(lowestRating);
  //   console.log(highestRating);

  averageRaitingOfAll = averageRateOfAFilm / countFilms;
  //   "{име на филма с най-висок рейтинг} is with highest rating: {рейтинг на филма}"
  // • "{име на филма с най-нисък рейтинг} is with lowest rating: {рейтинг на филма}"
  // • "Average rating: {средният рейтинг на всички филми}"

  console.log(
    `${highestRatingFilm} is with highest rating: ${highestRating.toFixed(1)}`
  );
  console.log(
    `${lowestRatingFilm} is with lowest rating: ${lowestRating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRaitingOfAll.toFixed(1)}`);
}

movieRating(['3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2']);
