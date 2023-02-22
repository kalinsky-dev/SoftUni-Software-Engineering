function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let nameOfCurrentFilm = '';
  let currentPlacesAvailable = 0;
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let countAllTickets = 0;
  let countStandardTickets = 0;
  let countStudentTickets = 0;
  let countKidTickets = 0;

  while (command !== 'Finish') {
    nameOfCurrentFilm = command;
    index++;
    currentPlacesAvailable = Number(input[index]);
    for (let i = 1; i <= currentPlacesAvailable; i++) {
      index++;
      command = input[index];
      switch (command) {
        case 'standard':
          standardTickets++;
          break;
        case 'student':
          studentTickets++;
          break;
        case 'kid':
          kidTickets++;
          break;
        case 'End':
          break;
      }
      if (command === 'End') {
        break;
      }
    }
    countKidTickets += kidTickets;
    countStandardTickets += standardTickets;
    countStudentTickets += studentTickets;
    countAllTickets += standardTickets + studentTickets + kidTickets;
    console.log(
      `${nameOfCurrentFilm} - ${(
        ((kidTickets + standardTickets + studentTickets) /
          currentPlacesAvailable) *
        100
      ).toFixed(2)}% full.`
    );

    standardTickets = 0;
    studentTickets = 0;
    kidTickets = 0;
    index++;
    command = input[index];
  }

  if (command === 'Finish') {
    console.log(`Total tickets: ${countAllTickets}`);
    console.log(
      `${((countStudentTickets / countAllTickets) * 100).toFixed(
        2
      )}% student tickets.`
    );
    console.log(
      `${((countStandardTickets / countAllTickets) * 100).toFixed(
        2
      )}% standard tickets.`
    );
    console.log(
      `${((countKidTickets / countAllTickets) * 100).toFixed(2)}% kids tickets.`
    );
  }
}

cinemaTickets([
  'Taxi',
  '10',
  'standard',
  'kid',
  'student',
  'student',
  'standard',
  'standard',
  'End',
  'Scary Movie',
  '6',
  'student',
  'student',
  'student',
  'student',
  'student',
  'student',
  'Finish',
]);
