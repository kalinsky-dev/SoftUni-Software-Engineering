function weddingSeats(input) {
  //     •	Последния сектор от секторите - символ (B-Z)
  // •	Броят на редовете в първия сектор - цяло число (1-100)
  // •	Броят на местата на нечетен ред - цяло число (1-24)

  const lastSector = input[0];
  const rowsInFirstSector = Number(input[1]);
  const countPlacesOddRow = Number(input[2]);

  const lastSectorNum = lastSector.charCodeAt();
  let counterAddedRows = -1;
  let countPlaces = 0;
  let countAllPlaces = 0;

  for (let i = 65; i <= lastSectorNum; i++) {
    counterAddedRows++;
    for (let row = 1; row <= rowsInFirstSector + counterAddedRows; row++) {
      if (row % 2 === 0) {
        countPlaces = 2;
      } else {
        countPlaces = 0;
      }
      for (
        let places = 1;
        places <= countPlacesOddRow + countPlaces;
        places++
      ) {
        let charI = String.fromCharCode(i);
        let charPlaces = String.fromCharCode(96 + places);
        console.log(`${charI}${row}${charPlaces}`);
        countAllPlaces++;
      }
    }
  }
  console.log(countAllPlaces);
}

// weddingSeats(["B", "3", "2"]);
weddingSeats(['C', '4', '2']);
