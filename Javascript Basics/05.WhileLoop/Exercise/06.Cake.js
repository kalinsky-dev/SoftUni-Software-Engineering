function cake(input) {
  let index = 0;

  const widthCake = Number(input[index]);
  index++;
  const lengthCake = Number(input[index]);
  index++;

  let countPieces = widthCake * lengthCake;
  let command = input[index];
  let currPieces = 0;

  let leftPieces = true;

  while (command !== 'STOP') {
    currPieces = Number(command);
    countPieces -= currPieces;
    if (countPieces < 0) {
      console.log(
        `No more cake left! You need ${Math.abs(countPieces)} pieces more.`
      );
      leftPieces = false;
      break;
    }
    index++;
    command = input[index];
  }
  if (leftPieces) {
    console.log(`${countPieces} pieces are left.`);
  }
}

// cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(['10', '2', '2', '4', '6', 'STOP']);
