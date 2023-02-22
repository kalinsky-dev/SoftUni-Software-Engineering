function building(input) {
  const floorsCount = Number(input[0]);
  const roomsCount = Number(input[1]);
  let result = '';

  for (let floors = floorsCount; floors >= 1; floors--) {
    for (let rooms = 0; rooms < roomsCount; rooms++) {
      if (floors === floorsCount) {
        result += `L${floors}${rooms} `;
      } else if (floors % 2 !== 0) {
        result += `A${floors}${rooms} `;
      } else {
        result += `O${floors}${rooms} `;
      }
    }
    console.log(result);
    result = '';
  }
}

building(['6', '4']);
