const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}//end randomNum

export const setRandomDate = (today, date, setDate) => {
  //break down current year, month, and day
  //'today', 'date', and 'setDate' come from App.js State
  const curYear = today.slice(0, 4);
  const curMonth = today.slice(5, 7);
  const curDay = today.slice(-2);

  //make a random year INT between 2000 and current year
  let year = randomNum(1999, curYear);

  //limit month if year is current year
  //random month INT
  let month = randomNum(1, 12);
  if (parseInt(year) === parseInt(curYear)) {
    month = randomNum(1, curMonth);
  }//end if year  

  //limit day if year and month is current
  //random day INT
  let day = randomNum(1, 28);
  if (year === curYear && month === curMonth) {
    day = randomNum(1, curDay);
  }//end if year and month

  //convert all values to a string & padStart for api format
  const randomDate = `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  setDate(randomDate);
}//end setRandomDate