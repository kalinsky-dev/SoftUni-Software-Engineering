function challengeTheWedding(input) {
  //     •	Броя клиенти мъже - цяло число в интервала [1...100]
  // •	Броя клиенти жени - цяло число в интервала [1...100]
  // •	Максималният брой маси - цяло число в интервала [1...100]

  const countMen = Number(input[0]);
  const countWomen = Number(input[1]);
  const maxTables = Number(input[2]);

  let counterTables = 0;
  let result = '';

  for (let i = 1; i <= countMen; i++) {
    for (let j = 1; j <= countWomen; j++) {
      counterTables++;
      if (counterTables <= maxTables) {
        result += `(${i} <-> ${j}) `;
      } else {
        break;
      }
    }
  }
  console.log(result);
}

// challengeTheWedding(["2", "2", "6"]);
// challengeTheWedding(["2", "2", "3"]);
challengeTheWedding(['5', '8', '40']);
