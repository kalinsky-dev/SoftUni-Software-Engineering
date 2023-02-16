function fruitOrVegetable(input) {
  const nameOfAProduct = input[0];

  //   •	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
  // •	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
  // •	Всички останали са "unknown"

  switch (nameOfAProduct) {
    case 'banana':
    case 'apple':
    case 'kiwi':
    case 'cherry':
    case 'lemon':
    case 'grapes':
      console.log('fruit');
      break;
    case 'tomato':
    case 'cucumber':
    case 'pepper':
    case 'carrot':
      console.log('vegetable');
      break;
    default:
      console.log('unknown');
      break;
  }
}

fruitOrVegetable(['banana']);
