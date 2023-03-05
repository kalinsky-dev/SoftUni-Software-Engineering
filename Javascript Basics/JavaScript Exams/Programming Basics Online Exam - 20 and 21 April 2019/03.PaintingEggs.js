function paintingEggs(input) {
  //     •	Първи ред – размер на яйцата – текст с възможности "Large", "Medium" или "Small"
  // •	Втори ред – цвят на яйцата – текст  с възможности "Red", "Green" или "Yellow"
  // •	Трети ред – брой партиди – цяло число в интервала [1… 350]

  const sizeEggs = input[0];
  const colorEggs = input[1];
  const count = Number(input[2]);
  let pricePerOne = 0;
  let price = 0;

  //                  Червено (Red)	Зелено (Green)	Жълто (Yellow)
  //   Големи (Large)  	16 лв.        	12 лв.	     9 лв.
  //   Средни (Medium)	13 лв.	        9 лв.	       7 лв.
  //   Малки (Small)	     9 лв.	         8 лв.	      5 лв.

  switch (colorEggs) {
    case 'Red':
      switch (sizeEggs) {
        case 'Large':
          pricePerOne = 16;
          break;
        case 'Medium':
          pricePerOne = 13;
          break;
        case 'Small':
          pricePerOne = 9;
          break;
      }
      break;
    case 'Green':
      switch (sizeEggs) {
        case 'Large':
          pricePerOne = 12;
          break;
        case 'Medium':
          pricePerOne = 9;
          break;
        case 'Small':
          pricePerOne = 8;
          break;
      }
      break;
    case 'Yellow':
      switch (sizeEggs) {
        case 'Large':
          pricePerOne = 9;
          break;
        case 'Medium':
          pricePerOne = 7;
          break;
        case 'Small':
          pricePerOne = 5;
          break;
      }
      break;
  }

  price = 0.65 * pricePerOne * count;
  console.log(`${price.toFixed(2)} leva.`);
}

paintingEggs(['Large', 'Red', '7']);
