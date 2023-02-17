function characterSequence(input) {
  const word = input[0];
  const length = word.length;

  for (let i = 0; i < length; i++) {
    console.log(word.charAt(i));
  }
}

characterSequence(['softuni']);
