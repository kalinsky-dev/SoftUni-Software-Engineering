function easterGuests(input) {
  //     •	Един козунак струва 4лв.
  // •	Едно яйце струва 0.45лв.

  //   •	На първия ред са броят на гостите – цяло число в интервала [0 ... 200000]
  // •	На втория ред е бюджетът с който разполага Любо  – цяло число в интервала [0 ... 200000]

  const kozunakPrice = 4;
  const eggPrice = 0.45;
  const countGuests = Number(input[0]);
  const budget = Number(input[1]);

  const countKozunaks = Math.ceil(countGuests / 3);
  const countEggs = countGuests * 2;

  const price = kozunakPrice * countKozunaks + countEggs * eggPrice;

  //   •	Ако бюджетът е достатъчен:
  // o	"Lyubo bought {брои закупени козунаци} Easter bread and {брои закупени яйца} eggs."
  // o	"He has {останали пари} lv. left."
  // •	Ако  бюджетът НЕ Е достатъчен:
  // o	"Lyubo doesn't have enough money."
  // o	"He needs {недостигащи пари} lv. more."
  // Парите да бъдат форматирани до втората цифра след десетичния знак.

  const diff = Math.abs(price - budget);
  if (budget >= price) {
    console.log(
      `Lyubo bought ${countKozunaks} Easter bread and ${countEggs} eggs.`
    );
    console.log(`He has ${diff.toFixed(2)} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}

easterGuests(['10', '35']);
