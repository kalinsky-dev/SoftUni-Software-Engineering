function housePainting(input) {
  // •	Предната и задната стена са квадрати със страна „x“
  // o	на предната стена има правоъгълна врата с широчина 1.2м и височина 2м
  // •	Страничните стени са правоъгълници със страни „x“ и „y“
  // o	и на двете странични стени има по един квадратен прозорец със страна 1.5м
  // Покривът има следните размери:
  // •	Два правоъгълника със страни „x“ и „y“
  // •	Два равностранни триъгълника със страна „x“ и височина „h“
  // Трябва да пресметнете площта на всички страни и площта на покрива, за да
  // намерите колко литра от всяка боя ще са нужни.

  const x = Number(input[0]);
  const y = Number(input[1]);
  const h = Number(input[2]);

  const frontAndBackArea = 2 * x * x - 1.2 * 2;
  const sideArea = 2 * x * y - 2 * 1.5 * 1.5;
  const roofRectanlge = x * y * 2;
  const roofTriangle = x * h;

  const areaWalls = frontAndBackArea + sideArea;
  const areaRoof = roofTriangle + roofRectanlge;

  const greenPainting = areaWalls / 3.4;
  const redPainting = areaRoof / 4.3;

  console.log(greenPainting.toFixed(2));
  console.log(redPainting.toFixed(2));
}

housePainting(['6', '10', '5.2']);
