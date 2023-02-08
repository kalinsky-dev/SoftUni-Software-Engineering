function foodDelivery(input) {
  //NEEDED STUFF
  //     Ресторант отваря врати и предлага няколко менюта на преференциални цени:
  // •	Пилешко меню –  10.35 лв.
  // •	Меню с риба – 12.40 лв.
  // •	Вегетарианско меню  – 8.15 лв.

  const chicken = 10.35;
  const fish = 12.4;
  const vegMenu = 8.15;

  //INPUT
  // От конзолата се четат 3 реда:
  // Брой пилешки менюта – цяло число в интервала [0 … 99]
  // Брой менюта с риба – цяло число в интервала [0 … 99]
  // Брой вегетариански менюта – цяло число в интервала [0 … 99]

  const numberOfChickenMenus = Number(input[0]);
  const numberOfFishMenus = Number(input[1]);
  const numberOfVegMenus = Number(input[2]);

  //SOLUTION TO THE PROBLEM

  // Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
  // Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
  // Цената на доставка е 2.50 лв и се начислява най-накрая.

  const priceOfFood =
    chicken * numberOfChickenMenus +
    fish * numberOfFishMenus +
    vegMenu * numberOfVegMenus;
  const dessertPrice = (20 / 100) * priceOfFood;

  const price = priceOfFood + dessertPrice + 2.5;

  //OUTPUT
  // Да се отпечата на конзолата един ред:  "{цена на поръчката}"

  console.log(price);
}

foodDelivery(['2', '4', '3']);
