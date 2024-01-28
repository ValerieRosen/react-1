// write a function called addCommas which accepts a number
// and converts it into a string formatted with commas added
// for readability

function addCommas() {
  const num = [""];
  num[1] = 1234;
  num[2] = 1000000;
  num[3] = 9876543210;
  num[4] = 6;
  num[5] = -10;
  num[6] = -5678;

  return [num.toLocaleString()];
}

module.exports = addCommas;
