function areaOfFigure(input) {
  const figure = input[0];
  let area = 0;

  //   •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
  //   •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
  //   •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
  //   •	Ако фигурата е триъгълник (triangle): на следващите два реда
  //   четат две дробни числа - дължината на страната му и дължината на височината към нея

  if (figure === 'square') {
    const a = Number(input[1]);
    area = a * a;
  } else if (figure === 'rectangle') {
    const a = Number(input[1]);
    const b = Number(input[2]);
    area = a * b;
  } else if (figure === 'circle') {
    const r = Number(input[1]);
    area = Math.PI * Math.pow(r, 2);
  } else if (figure === 'triangle') {
    const a = Number(input[1]);
    const h = Number(input[2]);
    area = (a * h) / 2;
  }

  console.log(area.toFixed(3));
}

areaOfFigure(['square', '5']);
