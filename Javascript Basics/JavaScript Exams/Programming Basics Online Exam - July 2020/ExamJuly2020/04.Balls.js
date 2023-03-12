function balls(input) {
  const balls = Number(input[0]);

  //   Ако топката е “red” точките ни се повишават с 5.
  //    Ако топката е “orange” точките ни се повишават с 10.
  //    Ако топката е “yellow” точките ни се повишават с 15.
  //    Ако топката е “white” точките ни се повишават с 20.
  //    Ако топката е “black” точките ни се делят на 2, като закръгляме към по-малкото цяло число.
  //   Ако топката е с какъвто и да е цвят, различен от по-горните, точките не се манипулират и програмата продължава да работи.

  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let blackBallsDevided = 0;
  let points = 0;
  let ballsOther = 0;

  for (let i = 1; i <= balls; i++) {
    let color = input[i];
    switch (color) {
      case 'red':
        points = points + 5;
        redBalls++;
        break;
      case 'orange':
        points = points + 10;
        orangeBalls++;
        break;
      case 'yellow':
        points = points + 15;
        yellowBalls++;
        break;
      case 'white':
        points = points + 20;
        whiteBalls++;
        break;
      case 'black':
        points = Math.trunc(points / 2);
        blackBallsDevided++;
        break;
      default:
        ballsOther++;
        continue;
    }
  }
  //   "Total points: {всичките събрани точки}"
  //   "Red balls: {броят червени топки}"
  //   "Orange balls: {броят оранжеви топки}"
  //   "Yellow balls: {броят жълти топки}"
  //   "White balls: {броят бели топки}"
  //   "Other colors picked: {броят на избраните топки извън зададените цветове}"
  //   "Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"

  console.log(`Total points: ${points}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${ballsOther}`);
  console.log(`Divides from black balls: ${blackBallsDevided}`);
}

balls(['3', 'white', 'black', 'pink']);
