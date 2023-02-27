function profit(input) {
  //     1.	Брой монети по 1лв. - цяло положително число;
  // 2.	Брой монети по 2лв. - цяло положително число;
  // 3.	Брой банкноти по 5лв. - цяло положително число;
  // 4.	Сума - цяло положително число в интервала [1…1000];

  const coins1 = Number(input[0]);
  const coins2 = Number(input[1]);
  const coins5 = Number(input[2]);
  const sum = Number(input[3]);

  for (let i = 0; i <= coins1; i++) {
    for (let j = 0; j <= coins2; j++) {
      for (let k = 0; k <= coins5; k++) {
        if (i * 1 + j * 2 + k * 5 === sum) {
          console.log(
            `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`
          );
        }
      }
    }
  }
}

// profit(["3", "2", "3", "10"]);
profit(['5', '3', '1', '7']);
