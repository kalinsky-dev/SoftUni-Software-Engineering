function favoriteMovie(input) {
  //     От конзолата се четат редове до команда "STOP" или до достигането на лимита от 7 филма:
  // •	Заглавие на филм  – текст;
  let i = 0;
  let film = input[i];
  let filmLength = 0;
  let char = '';
  let numChar = 0;
  let currPoints = 0;
  let points = 0;
  let bestFilm = '';
  while (film !== 'STOP' && i < 7) {
    film = input[i];
    filmLength = film.length;
    filmLength = Number(filmLength);
    for (let j = 0; j < filmLength; j++) {
      char = film[j];
      numChar = char.charCodeAt(0);
      if (numChar >= 65 && numChar <= 90) {
        numChar -= filmLength;
      } else if (numChar >= 97 && numChar <= 122) {
        numChar -= 2 * filmLength;
      }
      currPoints += numChar;
    }

    if (currPoints >= points) {
      points = currPoints;
      bestFilm = film;
    }
    currPoints = 0;
    i++;
  }
  if (film === 'STOP') {
    console.log(
      `The best movie for you is ${bestFilm} with ${points} ASCII sum.`
    );
  } else {
    console.log(`The limit is reached.`);
    console.log(
      `The best movie for you is ${bestFilm} with ${points} ASCII sum.`
    );
  }
}

//favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);

favoriteMovie([
  'Wrong turn',
  'The maze',
  'Area 51',
  'Night Club',
  'Ice age',
  'Harry Potter',
  'Wizards',
]);
