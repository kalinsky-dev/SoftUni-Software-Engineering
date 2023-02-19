function oldBooks(input) {
  let index = 0;
  const searchedBook = input[index];
  index++;
  let currBook = input[index];
  let countBooks = 0;
  let isFound = false;

  while (currBook !== 'No More Books') {
    countBooks++;
    if (currBook == searchedBook) {
      console.log(`You checked ${countBooks - 1} books and found it.`);
      isFound = true;
      break;
    }
    index++;
    currBook = input[index];
  }
  if (!isFound) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${countBooks} books.`);
  }
}

// oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// oldBooks([
//   "The Spot",
//   "Hunger Games",
//   "Harry Potter",
//   "Torronto",
//   "Spotify",
//   "No More Books",
// ]);
oldBooks([
  'Bourne',
  'True Story',
  'Forever',
  'More Space',
  'The Girl',
  'Spaceship',
  'Strongest',
  'Profit',
  'Tripple',
  'Stella',
  'The Matrix',
  'Bourne',
]);
