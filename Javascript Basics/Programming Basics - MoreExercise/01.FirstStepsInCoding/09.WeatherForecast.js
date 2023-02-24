function weatherForecast(input) {
  const str = input[0];

  if (str === 'sunny') {
    console.log("It's warm outside!");
  } else {
    console.log("It's cold outside!");
  }
}

weatherForecast(['sunny']);
