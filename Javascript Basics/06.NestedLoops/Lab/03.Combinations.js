function combination(input) {
  const n = Number(input[0]);
  let validCombination = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      for (let k = 0; k <= n; k++) {
        if (i + j + k === n) {
          validCombination++;
        }
      }
    }
  }
  console.log(validCombination);
}

combination(['25']);
