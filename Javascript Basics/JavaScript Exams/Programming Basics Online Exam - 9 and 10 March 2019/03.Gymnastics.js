function gymnastics(input) {
  //     •	Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy")
  // •	Втори ред – уред - текст ("ribbon", "hoop" или "rope")

  const countrey = input[0];
  const tool = input[1];
  let markDifficulty = 0;
  let markImplementation = 0;
  let mark = 0;
  let percentOfMax = 0;

  switch (countrey) {
    case 'Russia':
      switch (tool) {
        case 'ribbon':
          markDifficulty = 9.1;
          markImplementation = 9.4;
          mark = markDifficulty + markImplementation;
          break;
        case 'hoop':
          markDifficulty = 9.3;
          markImplementation = 9.8;
          mark = markDifficulty + markImplementation;
          break;
        case 'rope':
          markDifficulty = 9.6;
          markImplementation = 9.0;
          mark = markDifficulty + markImplementation;
          break;
      }
      break;
    case 'Bulgaria':
      switch (tool) {
        case 'ribbon':
          markDifficulty = 9.6;
          markImplementation = 9.4;
          mark = markDifficulty + markImplementation;
          break;
        case 'hoop':
          markDifficulty = 9.55;
          markImplementation = 9.75;
          mark = markDifficulty + markImplementation;
          break;
        case 'rope':
          markDifficulty = 9.5;
          markImplementation = 9.4;
          mark = markDifficulty + markImplementation;
          break;
      }
      break;
    case 'Italy':
      switch (tool) {
        case 'ribbon':
          markDifficulty = 9.2;
          markImplementation = 9.5;
          mark = markDifficulty + markImplementation;
          break;
        case 'hoop':
          markDifficulty = 9.45;
          markImplementation = 9.35;
          mark = markDifficulty + markImplementation;
          break;
        case 'rope':
          markDifficulty = 9.7;
          markImplementation = 9.15;
          mark = markDifficulty + markImplementation;
          break;
      }
      break;
  }
  percentOfMax = ((20 - mark) / 20) * 100;
  console.log(`The team of ${countrey} get ${mark.toFixed(3)} on ${tool}.`);
  console.log(`${percentOfMax.toFixed(2)}%`);
}

gymnastics(['Italy', 'hoop']);
