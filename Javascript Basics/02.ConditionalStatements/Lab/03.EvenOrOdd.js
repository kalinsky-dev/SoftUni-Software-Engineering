function evenOrOdd(input) {
  const numToCheck = Number(input[0]);

  if (numToCheck % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(['3']);
