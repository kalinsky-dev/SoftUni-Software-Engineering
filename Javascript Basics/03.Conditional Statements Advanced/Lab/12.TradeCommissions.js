function tradeCommissions(input) {
  const town = input[0];
  let sells = Number(input[1]);
  //   Град	      0 ≤ s ≤ 500	   500 < s ≤ 1 000   	1 000 < s ≤ 10 000  	s > 10 000
  //   Sofia      	5%      	       7%	                   8%            	12%
  //   Varna	      4.5%     	      7.5%	                  10%	             13%
  //   Plovdiv	      5.5%	            8%	                  12%	            14.5%

  switch (town) {
    case 'Sofia':
      if (sells > 10000) {
        sells *= 12 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 10000 && sells > 1000) {
        sells *= 8 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 1000 && sells > 500) {
        sells *= 7 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 500 && sells >= 0) {
        sells *= 5 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else {
        console.log('error');
      }
      break;
    case 'Varna':
      if (sells > 10000) {
        sells *= 13 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 10000 && sells > 1000) {
        sells *= 10 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 1000 && sells > 500) {
        sells *= 7.5 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 500 && sells >= 0) {
        sells *= 4.5 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else {
        console.log('error');
        ``;
      }
      break;
    case 'Plovdiv':
      if (sells > 10000) {
        sells *= 14.5 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 10000 && sells > 1000) {
        sells *= 12 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 1000 && sells > 500) {
        sells *= 8 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else if (sells <= 500 && sells >= 0) {
        sells *= 5.5 / 100;
        console.log(`${sells.toFixed(2)}`);
      } else {
        console.log('error');
      }
      break;
    default:
      console.log('error');
      break;
  }
}

tradeCommissions(['Sofia', '1500']);
