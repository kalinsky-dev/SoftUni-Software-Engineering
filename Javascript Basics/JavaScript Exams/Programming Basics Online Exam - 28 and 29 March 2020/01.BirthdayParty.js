function birthdayParty(input) {
  const costRoom = Number(input[0]);
  const cake = 0.2 * costRoom;
  const drinks = 0.55 * cake;
  const animator = (1 / 3) * costRoom;

  const cost = costRoom + cake + drinks + animator;
  console.log(`${cost}`);
}

birthdayParty(['2250']);
