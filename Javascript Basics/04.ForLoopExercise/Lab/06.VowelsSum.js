function vowelsSum(input) {
  const word = input[0];
  const length = word.length;
  let ch = '';
  let sum = 0;

  //   буква	a	e	i	o	u
  // стойност	1	2	3	4	5

  for (let i = 0; i < length; i++) {
    ch = word[i];
    switch (ch) {
      case 'a':
        sum += 1;
        break;
      case 'e':
        sum += 2;
        break;
      case 'i':
        sum += 3;
        break;
      case 'o':
        sum += 4;
        break;
      case 'u':
        sum += 5;
        break;
    }
  }
  console.log(sum);
}

vowelsSum(['hello']);
