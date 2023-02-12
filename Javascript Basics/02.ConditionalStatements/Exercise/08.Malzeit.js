function malZeit(input) {
  const nameOfAFilm = input[0];
  const timeOfAFilm = Number(input[1]);
  const timeOfABreak = Number(input[2]);

  //   По време на почивката отделяте време за обяд и време за отдих.
  //   Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка.

  const timeToEat = (1 / 8) * timeOfABreak;
  const timeToRelax = (1 / 4) * timeOfABreak;
  const timeToCheck = timeOfABreak - timeToEat - timeToRelax;

  //   •	Ако времето е достатъчно да изгледате епизода:
  // "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
  // •	Ако времето не Ви е достатъчно:
  // "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."

  if (timeToCheck >= timeOfAFilm) {
    console.log(
      `You have enough time to watch ${nameOfAFilm} and left with ${Math.ceil(
        timeToCheck - timeOfAFilm
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${nameOfAFilm}, you need ${Math.ceil(
        timeOfAFilm - timeToCheck
      )} more minutes.`
    );
  }
}

malZeit(['Game of Thrones', '60', '96']);
