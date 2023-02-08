function depositCalculator(input) {
  // Депозирана сума – реално число в интервала [100.00 … 10000.00]
  // Срок на депозита (в месеци) – цяло число в интервала [1…12]
  // Годишен лихвен процент – реално число в интервала [0.00 …100.00]

  const depositSum = Number(input[0]);
  const depositTerm = Number(input[1]);
  const interestRate = Number(input[2]);

  // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

  const sum =
    depositSum + depositTerm * ((depositSum * interestRate) / 100 / 12);

  console.log(sum);
}

depositCalculator(['200', '3', '5.7']);
