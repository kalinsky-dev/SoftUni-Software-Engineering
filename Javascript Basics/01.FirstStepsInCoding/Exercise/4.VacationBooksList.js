function vacationBooksList(input) {
  // 1.Брой страници в текущата книга – цяло число в интервала [1…1000]
  // 2.Страници, които прочита за 1 час – цяло число в интервала [1…1000]
  // 3.Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

  const pagesPerBook = Number(input[0]);
  const pagesReadedPerHour = Number(input[1]);
  const daysToReadTheBook = Number(input[2]);

  const hoursToReadDaily =
    pagesPerBook / (pagesReadedPerHour * daysToReadTheBook);

  console.log(hoursToReadDaily);
}

vacationBooksList(['212', '20', '2']);
