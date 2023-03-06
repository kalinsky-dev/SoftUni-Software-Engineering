function easterBake(input) {
  //     •	 Броят на козунаците – цяло число в интервала [1 ... 100]
  // За всеки козунак се чете:
  // o	Количество изразходвана захар (грамове) – цяло число в интервала [1 … 10000]
  // o	Количество изразходвано брашно (грамове) – цяло число в интервала [1 … 10000]

  let index = 0;
  const countBake = Number(input[index]);
  index++;
  const length = countBake * 2;

  const onePaketZahar = 950;
  const onePaketBrashno = 750;
  let maxBrashno = 0;
  let maxZahar = 0;
  let currZahar = 0;
  let currBrashno = 0;

  let zaharAll = 0;
  let brashnoAll = 0;

  for (let i = 0; i < length; i = i + 2) {
    currZahar = Number(input[index]);
    index++;
    currBrashno = Number(input[index]);
    index++;

    if (currZahar > maxZahar) {
      maxZahar = currZahar;
    }
    if (currBrashno > maxBrashno) {
      maxBrashno = currBrashno;
    }
    zaharAll += currZahar;
    brashnoAll += currBrashno;
  }

  let paketiBrashno = 0;
  let paketiZahar = 0;

  paketiBrashno = Math.ceil(brashnoAll / onePaketBrashno);
  paketiZahar = Math.ceil(zaharAll / onePaketZahar);

  //   •	"Sugar: {брой нужни пакети захар}"
  // •	"Flour: {брой нужни пакет брашно}"
  // •	"Max used flour is {максимално количество грамове брашно, използвани за правенето на козунак} grams, max used sugar is {максимално количество грамове захар, използвани за правенето на козунак} grams."
  // Пакетите захар и брашно да бъдат закръглени към най-близкото цяло число нагоре.

  console.log(`Sugar: ${paketiZahar}`);
  console.log(`Flour: ${paketiBrashno}`);
  console.log(
    `Max used flour is ${maxBrashno} grams, max used sugar is ${maxZahar} grams.`
  );
}

// easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(['4', '500', '350', '560', '430', '600', '345', '578', '543']);
