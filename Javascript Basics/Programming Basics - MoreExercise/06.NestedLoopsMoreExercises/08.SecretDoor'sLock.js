function secretDoorLock(input) {
  //     •	Горната граница на стотиците - цяло число в диапазона (1-9)
  // •	Горната граница на десетиците - цяло число в диапазона (1-9)
  // •	Горната граница на единиците - цяло число в диапазона (1-9)

  const hundredNum = Number(input[0]);
  const dozenNum = Number(input[1]);
  const unitNum = Number(input[2]);

  for (let i = 1; i <= hundredNum; i++) {
    for (let j = 1; j <= dozenNum; j++) {
      for (let k = 1; k <= unitNum; k++) {
        if (i % 2 === 0 && k % 2 === 0) {
          if (j === 2 || j === 3 || j === 5 || j === 7) {
            console.log(`${i} ${j} ${k}`);
          }
        }
      }
    }
  }
}

secretDoorLock(['3', '5', '5']);
// secretDoorLock(["8", "2", "8"]);
