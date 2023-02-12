function passwordGuess(input) {
  const passToCheck = input[0];

  if (passToCheck === 's3cr3t!P@ssw0rd') {
    console.log('Welcome');
  } else {
    console.log('Wrong password!');
  }
}

passwordGuess(['qwerty']);
