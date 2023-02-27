function uniquePinCodes(input) {
  //     •	Горната граница на първото число - цяло число в диапазона [1...9]
  // •	Горната граница на второто число - цяло число в диапазона [1...9]
  // •	Горната граница на третото число - цяло число в диапазона [1...9]

  const highestFirstNum = Number(input[0]);
  const highestSecondNum = Number(input[1]);
  const highestThirdNum = Number(input[2]);

  for (let i = 1; i <= highestFirstNum; i++) {
    for (let j = 1; j <= highestSecondNum; j++) {
      for (let n = 1; n <= highestThirdNum; n++) {
        if (i % 2 === 0 && n % 2 === 0 && j >= 2 && j <= 7) {
          if (j === 2 || j === 3 || j === 5 || j === 7) {
            console.log(`${i} ${j} ${n}`);
          }
        }
      }
    }
  }
}

// uniquePinCodes(["3", "5", "5"]);
uniquePinCodes(['8', '2', '8']);
