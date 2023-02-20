function passWord(input) {
  let index = 0;

  const user = input[index];
  index++;
  const passWord = input[index];
  index++;

  let currPass = input[index];

  while (currPass !== passWord) {
    // console.log(`${currPass}`);
    index++;
    currPass = input[index];
  }
  console.log(`Welcome ${user}!`);
}

passWord(['Nakov', '1234', 'Pass', '1324', '1234']);
