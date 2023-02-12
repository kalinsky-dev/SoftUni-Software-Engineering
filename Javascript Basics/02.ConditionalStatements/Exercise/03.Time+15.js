function timePlus15Minutes(input) {
  const hour = Number(input[0]);
  const min = Number(input[1]);
  let minutesAfter15 = min + 15;
  let hourAfter15 = hour;

  if (minutesAfter15 >= 60) {
    hourAfter15 += 1;
    minutesAfter15 -= 60;
  }

  if (hourAfter15 >= 24) {
    hourAfter15 -= 24;
  }

  if (minutesAfter15 < 10) {
    console.log(`${hourAfter15}:0${minutesAfter15}`);
  } else {
    console.log(`${hourAfter15}:${minutesAfter15}`);
  }
}

timePlus15Minutes(['12', '49']);
