function clockPart2(input) {
  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        console.log(`${hour} : ${min} : ${sec}`);
      }
    }
  }
}

clockPart2();
