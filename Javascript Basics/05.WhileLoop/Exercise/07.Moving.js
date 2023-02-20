function moving(input) {
  let index = 0;
  const widthAvailable = Number(input[index]);
  index++;
  const lengthAvailable = Number(input[index]);
  index++;
  const heightAvailable = Number(input[index]);
  index++;

  let availableVolume = widthAvailable * lengthAvailable * heightAvailable;
  let currVolume = 0;
  let noMoreVolume = false;

  let command = input[index];

  while (command !== 'Done') {
    currVolume = Number(command);
    availableVolume -= currVolume;
    if (availableVolume < 0) {
      console.log(
        `No more free space! You need ${Math.abs(
          availableVolume
        )} Cubic meters more.`
      );
      noMoreVolume = true;
      break;
    }

    index++;
    command = input[index];
  }

  if (!noMoreVolume) {
    console.log(`${availableVolume} Cubic meters left.`);
  }
}

moving(['10', '10', '2', '20', '20', '20', '20', '122']);
// moving(["10", "1", "2", "4", "6", "Done"]);
