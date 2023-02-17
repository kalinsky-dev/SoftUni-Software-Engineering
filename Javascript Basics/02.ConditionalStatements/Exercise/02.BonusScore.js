function bonusScore(input) {
  // Да се напише функция, която пресмята бонус точките,
  // които получава числото и общия брой точки (числото + бонуса).

  const num = Number(input[0]);
  let bonusScore = 0;
  //     •	Ако числото е до 100 включително, бонус точките са 5.
  // •	Ако числото е по-голямо от 100, бонус точките са 20% от числото.
  // •	Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

  if (num <= 100) {
    bonusScore = 5;
  } else if (num <= 1000) {
    bonusScore = 0.2 * num;
  } else if (num > 100) {
    bonusScore = 0.1 * num;
  }
  // •	Допълнителни бонус точки (начисляват се отделно от предходните):
  // o	За четно число  + 1 т.
  // o	За число, което завършва на 5  + 2 т.

  if (num % 2 === 0) {
    bonusScore += 1;
  } else if (num % 10 === 5) {
    bonusScore += 2;
  }
  console.log(bonusScore);
  console.log(bonusScore + num);
}

bonusScore(['2703']);