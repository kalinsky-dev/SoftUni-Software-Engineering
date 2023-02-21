function sumPrimeNotPrice(input) {
  index = 0;
  let command = input[index];
  let numberToCheck = 0;
  let isPrime = true;
  let sumOfPrimes = 0;
  let sumOfNonPrimes = 0;

  while (command !== 'stop') {
    numberToCheck = Number(command);
    if (numberToCheck >= 0) {
      for (let del = 2; del < numberToCheck; del++) {
        if (numberToCheck % del === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        sumOfPrimes += numberToCheck;
      } else {
        sumOfNonPrimes += numberToCheck;
      }
      isPrime = true;
      index++;
      command = input[index];
    } else {
      console.log('Number is negative.');
      index++;
      command = input[index];
    }
  }
  console.log(`Sum of all prime numbers is: ${sumOfPrimes}`);
  console.log(`Sum of all non prime numbers is: ${sumOfNonPrimes}`);
}

sumPrimeNotPrice(['30', '83', '33', '-1', '20', 'stop']);
