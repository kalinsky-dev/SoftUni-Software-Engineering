function renovation(input) {
  const h = Number(input[0]);
  const w = Number(input[1]);
  const procentNeBoadisani = Number(input[2]) / 100;
  const length = input.length;
  let ostanalaBoq = h * w * 4 * (1 - procentNeBoadisani);
  //console.log(ostanalaBoq);
  let litriBoq = 0;

  for (let i = 3; i < length; i++) {
    litriBoq = input[i];
    if (litriBoq === 'Tired!') {
      break;
    }
    litriBoq = Number(input[i]);
    ostanalaBoq -= litriBoq;
    if (ostanalaBoq < 0) {
      break;
    }
  }
  if (litriBoq === 'Tired!') {
    console.log(`${Math.ceil(ostanalaBoq)} quadratic m left.`);
  } else if (ostanalaBoq > 0) {
    console.log(`${Math.ceil(ostanalaBoq)} quadratic m left.`);
  } else if (ostanalaBoq < 0) {
    console.log(
      `All walls are painted and you have ${Math.abs(
        ostanalaBoq
      )} l paint left!`
    );
  } else if ((ostanalaBoq = 0)) {
    console.log('All walls are painted! Great job, Pesho.');
  }
}

// renovation(["2", "3", "25", "6", "7", "8"]);
renovation(['3', '5', '10', '2', '3', '4', 'Tired!']);
