function multiplicationTable(input) {
  const numMultiplier = Number(input[0]);

  for (let i = 1; i <= 10; i++) {
    let result = i * numMultiplier;
    console.log(`${i} * ${numMultiplier} = ${result}`);
  }
}

multiplicationTable(['5']);
