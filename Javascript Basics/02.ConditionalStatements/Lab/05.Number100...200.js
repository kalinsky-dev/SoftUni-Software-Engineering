function number100To200(input) {
  const num = Number(input[0]);

  //   •	под 100 отпечатайте: "Less than 100"
  // •	между 100 и 200 отпечатайте: "Between 100 and 200"
  // •	над 200 отпечатайте: "Greater than 200"

  if (num < 100) {
    console.log('Less than 100');
  } else if (num <= 200) {
    console.log('Between 100 and 200');
  } else {
    console.log('Greater than 200');
  }
}

number100To200(['120']);
