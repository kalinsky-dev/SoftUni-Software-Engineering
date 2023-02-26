function hospital(input) {
  //     •	На първия ред – периода, за който трябва да направите изчисления. Цяло число в интервала [1 ... 1000]
  // •	На следващите редове(равни на броят на дните) – броя пациенти, които пристигат за преглед за текущия ден.
  //  Цяло число в интервала [0…10 000]

  let index = 0;
  const period = Number(input[index]);
  index++;
  let doctors = 7;
  let treatedPatients = 0;
  let untreatedPatients = 0;

  for (let i = 1; i <= period; i++) {
    if (i % 3 === 0) {
      if (untreatedPatients > treatedPatients) {
        doctors++;
      }
    }
    let currPatients = Number(input[index]);
    if (currPatients > doctors) {
      treatedPatients += doctors;
      untreatedPatients += currPatients - doctors;
    } else {
      treatedPatients += currPatients;
    }
    index++;
  }
  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(['6', '25', '25', '25', '25', '25', '2']);
