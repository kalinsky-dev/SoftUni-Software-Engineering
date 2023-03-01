function theMostPowerfulWord(input) {
  const length = Number(input.length);
  let char = '';
  let charCode = 0;
  let word = '';
  let wordLength = 0;
  let count = 0;
  let power = 0;
  let biggerPower = 0;
  let biggerWord = '';
  for (let i = 0; i < length; i++) {
    word = input[i];
    if (word === 'End of Words') {
      break;
    }
    wordLength = word.length;
    wordLength = Number(wordLength);
    for (let j = 0; j < wordLength; j++) {
      char = word[j];
      charNum = char.charCodeAt();
      power += charNum;
    }
    if (
      word[0] === 'a' ||
      word[0] === 'e' ||
      word[0] === 'i' ||
      word[0] === 'o' ||
      word[0] === 'u' ||
      word[0] === 'y' ||
      word[0] === 'A' ||
      word[0] === 'E' ||
      word[0] === 'I' ||
      word[0] === 'O' ||
      word[0] === 'U' ||
      word[0] === 'Y'
    ) {
      power *= wordLength;
    } else {
      power /= wordLength;
      power = Math.floor(power);
    }

    if (power > biggerPower) {
      biggerPower = power;
      biggerWord = word;
    }
    power = 0;
  }

  console.log(`The most powerful word is: ${biggerWord} - ${biggerPower}`);
}

theMostPowerfulWord([
  'But',
  'Some',
  'People',
  'Say',
  "It's",
  'LOVE',
  'End of Words',
]);
