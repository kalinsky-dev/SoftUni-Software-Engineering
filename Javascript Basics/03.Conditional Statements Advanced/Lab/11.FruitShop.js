function fruitShop(input) {
  const typeOfAFruit = input[0];
  const dayOfWeek = input[1];
  const count = Number(input[2]);
  let price = 0;

  //   Магазин за плодове през работните дни работи на следните цени:
  // плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
  // цена     2.50	1.20	0.85	1.45	    2.70	  5.50	   3.85
  // Събота и неделя магазинът работи на по-високи цени:
  // плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
  // цена	  2.70	 1.25	 0.90	  1.60	    3.00    	5.60	     4.20

  switch (dayOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      switch (typeOfAFruit) {
        case 'banana':
          price = count * 2.5;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'apple':
          price = count * 1.2;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'orange':
          price = count * 0.85;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'grapefruit':
          price = count * 1.45;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'kiwi':
          price = count * 2.7;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'pineapple':
          price = count * 5.5;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'grapes':
          price = count * 3.85;
          console.log(`${price.toFixed(2)}`);
          break;
        default:
          console.log('error');
          break;
      }
      break;
    case 'Saturday':
    case 'Sunday':
      switch (typeOfAFruit) {
        case 'banana':
          price = count * 2.7;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'apple':
          price = count * 1.25;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'orange':
          price = count * 0.9;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'grapefruit':
          price = count * 1.6;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'kiwi':
          price = count * 3.0;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'pineapple':
          price = count * 5.6;
          console.log(`${price.toFixed(2)}`);
          break;
        case 'grapes':
          price = count * 4.2;
          console.log(`${price.toFixed(2)}`);
          break;
        default:
          console.log('error');
          break;
      }

      break;

    default:
      console.log('error');
      break;
  }
}

fruitShop(['tomato', 'Monday', '0.5']);
