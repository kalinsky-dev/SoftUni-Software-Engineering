function personalTitles(input) {
  const age = Number(input[0]);
  const gender = input[1];

  //     •	"Mr." – мъж (пол 'm') на 16 или повече години
  // •	"Master" – момче (пол 'm') под 16 години
  // •	"Ms." – жена (пол 'f') на 16 или повече години
  // •	"Miss" – момиче (пол 'f') под 16 години

  if (age < 16) {
    if (gender === 'm') {
      console.log('Master');
    } else {
      console.log('Miss');
    }
  } else {
    if (gender === 'm') {
      console.log('Mr.');
    } else {
      console.log('Ms.');
    }
  }
}

personalTitles(['12', 'f']);
