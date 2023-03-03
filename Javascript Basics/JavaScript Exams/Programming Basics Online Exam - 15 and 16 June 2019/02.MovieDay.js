function movieDay(input) {
  const timeForPics = Number(input[0]);
  const szeniCount = Number(input[1]);
  const timeForSzena = Number(input[2]);

  const timeNeeded = szeniCount * timeForSzena + 0.15 * timeForPics;

  const diff = Math.abs(timeForPics - timeNeeded);

  if (timeForPics >= timeNeeded) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        diff
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(diff)} minutes.`
    );
  }
}

movieDay(['60', '15', '3']);
