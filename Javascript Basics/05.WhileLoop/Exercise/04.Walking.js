function walking(input) {
  const stepsToWalk = 10000;
  let index = 0;
  let command = input[index];
  let stepsAll = 0;
  let currentSteps = 0;
  let missionAccomplished = false;

  while (command !== 'Going home') {
    currentSteps = Number(input[index]);
    stepsAll += currentSteps;

    if (stepsAll >= stepsToWalk) {
      let diff = stepsAll - stepsToWalk;
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`);
      missionAccomplished = true;
      break;
    }

    index++;
    command = input[index];
  }
  if (command === 'Going home') {
    index++;
    currentSteps = Number(input[index]);
    stepsAll += currentSteps;
    let diff = Math.abs(stepsAll - stepsToWalk);
    if (stepsAll >= stepsToWalk) {
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`);
    } else {
      console.log(`${diff} more steps to reach goal.`);
    }
  }
}

// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(['125', '250', '4000', '30', '2678', '4682']);
