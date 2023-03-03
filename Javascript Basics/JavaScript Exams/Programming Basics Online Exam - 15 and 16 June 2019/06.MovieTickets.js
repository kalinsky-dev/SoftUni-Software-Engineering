function movieTickets(input) {
  const a1 = Number(input[0]);
  const a2 = Number(input[1]);
  const n = Number(input[2]);

  let symbol1 = 0;
  let symbol2 = 0;
  let symbol3 = 0;
  let symbol4 = 0;
  let symbol1Char = '';
  let sumSymbol = 0;
  let result = '';

  for (let symbol1 = a1; symbol1 <= a2 - 1; symbol1++) {
    for (let symbol2 = 1; symbol2 <= n - 1; symbol2++) {
      for (let symbol3 = 1; symbol3 <= n / 2 - 1; symbol3++) {
        symbol1Char = String.fromCharCode(symbol1);
        symbol4 = symbol1Char.charCodeAt();
        sumSymbol = symbol2 + symbol3 + symbol4;
        if (symbol1 % 2 !== 0 && sumSymbol % 2 !== 0) {
          console.log(`${symbol1Char}-${symbol2}${symbol3}${symbol4}`);
        }
      }
    }
  }
}

//movieTickets(["86", "88", "4"]);
//movieTickets(["71", "74", "6"]);
movieTickets(['69', '72', '4']);
