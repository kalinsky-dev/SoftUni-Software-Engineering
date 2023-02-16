function workingHours(input) {
  const hour = Number(input[0]);
  const dayOfWeek = input[1];
  /**
   * Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст)
   * и проверява дали офисът на фирма е отворен, като работното време на офисът е от 10-18 часа, от понеделник до събота включително.
   */
  if (dayOfWeek === 'Sunday') {
    console.log('closed');
  } else {
    if (hour >= 10 && hour <= 18) {
      console.log('open');
    } else {
      console.log('closed');
    }
  }
}

workingHours(['11', 'Monday']);
