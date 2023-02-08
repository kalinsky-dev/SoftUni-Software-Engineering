function yardGreening(input) {
  const area = Number(input[0]);
  const priceWithoutDiscount = area * 7.61;
  const discount = priceWithoutDiscount * (18 / 100);
  const finalPrice = priceWithoutDiscount - discount;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yardGreening(['348.49']);
