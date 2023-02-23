function celsiusToFahrenheit(input) {
  const cel = Number(input[0]);
  const far = cel * (9 / 5) + 32;

  console.log(far.toFixed(2));
}

celsiusToFahrenheit('25');
