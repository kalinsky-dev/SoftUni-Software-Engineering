function fishland(input) {
  // Георги ще има гости вечерта и решава да ги нагости с паламуд, сафрид и миди.
  //  Затова отива на рибната борса, за да си купи по няколко килограма.
  //  Oт конзолата се въвеждат цените в лева на скумрията и цацата. Също количеството на паламуд, сафрид и миди в килограми.
  //  Колко пари ще са му необходими, за да плати сметката си, ако цените на борсата са:
  // •	Паламуд – 60% по-скъп от скумрията
  // •	Сафрид – 80% по-скъп от цацата
  // •	Миди – 7.50 лв. за килограм

  const skumriaPerKilo = Number(input[0]);
  const cacaPerKilo = Number(input[1]);
  const palamudKilo = Number(input[2]);
  const safridKilo = Number(input[3]);
  const midiKilo = Number(input[4]);

  const palamudPricePerKilo = 1.6 * skumriaPerKilo;
  const safridPerKilo = 1.8 * cacaPerKilo;
  const price =
    palamudKilo * palamudPricePerKilo +
    safridKilo * safridPerKilo +
    midiKilo * 7.5;

  console.log(price.toFixed(2));
}

fishland(['6.90', '4.20', '1.5', '2.5', '1']);
