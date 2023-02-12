function speedInfo(input) {
  const speed = Number(input[0]);

  //   •	При скорост до 10 (включително) отпечатайте "slow"
  // •	При скорост над 10 и до 50 (включително) отпечатайте "average"
  // •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
  // •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast"
  // •	При по-висока скорост отпечатайте "extremely fast"

  if (speed <= 10) {
    console.log('slow');
  } else if (speed <= 50) {
    console.log('average');
  } else if (speed <= 150) {
    console.log('fast');
  } else if (speed <= 1000) {
    console.log('ultra fast');
  } else {
    console.log('extremely fast');
  }
}

speedInfo(['49.5']);
