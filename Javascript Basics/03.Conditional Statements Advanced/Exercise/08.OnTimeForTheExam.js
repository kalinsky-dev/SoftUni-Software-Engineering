function onTimeForTheExam(input) {
  const hourOfExam = Number(input[0]);
  const minOfExam = Number(input[1]);
  const hourOfArrival = Number(input[2]);
  const minOfArrival = Number(input[3]);

  const totalMinOfExam = hourOfExam * 60 + minOfExam;
  const totalMinOfArrival = hourOfArrival * 60 + minOfArrival;
  const diff = Math.abs(totalMinOfExam - totalMinOfArrival);
  const h = Math.floor(diff / 60);
  let m = diff % 60;

  if (totalMinOfExam - totalMinOfArrival < 0) {
    console.log('Late');
    if (h < 1) {
      console.log(`${m} minutes after the start`);
    } else {
      if (m < 10) {
        m = '0' + m;
      }
      console.log(`${h}:${m} hours after the start`);
    }
  } else if (totalMinOfExam - totalMinOfArrival <= 30) {
    console.log('On time');
    if (m !== 0) {
      console.log(`${m} minutes before the start`);
    }
  } else {
    console.log('Early');
    if (h < 1) {
      console.log(`${m} minutes before the start`);
    } else {
      if (m < 10) {
        m = '0' + m;
      }
      console.log(`${h}:${m} hours before the start`);
    }
  }
}

onTimeForTheExam(['9', '30', '9', '50']);
