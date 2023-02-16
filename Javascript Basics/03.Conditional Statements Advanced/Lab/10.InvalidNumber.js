function invalidNumber(input) {
  const numToCheck = Number(input[0]);

  if (numToCheck < 100 || numToCheck > 200) {
    if (numToCheck !== 0) {
      console.log('invalid');
    }
  }
}

invalidNumber(['75']);
