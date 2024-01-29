// write a function called addCommas which accepts a number
// and converts it into a string formatted with commas added
// for readability

// function addCommas(num) {
//   const num = [""];
//   num[1] = 1234;
//   num[2] = 1000000;
//   num[3] = 9876543210;
//   num[4] = 6;
//   num[5] = -10;
//   num[6] = -5678;

//   return [num.toLocaleString()];
// }

function addCommas(num) {
  //All numbers + but if - remember sign
  let sign = "";
  if (num < 0) sign = "-";
  num = Math.abs(num);

  //Convert to a string and split on either side of the decimal
  let [whole, decimal] = num.toString().split(".");

  if (decimal) {
    return `${sign}${commaInsert(whole)}.${decimal}`;
  }

  return `${sign}${commaInsert(whole)}`;
}

function commaInsert(str) {
  //keep track of where comma should go
  let commaIndex = 0;
  let commaStr = "";

  //iterate backwards
  for (let i = str.length - 1; i >= 0; i--) {
    commaStr = str[i] + commaStr;
    commaIndex++;

    //add comma after every 3rd character except beginning
    if (commaIndex % 3 === 0 && i !== 0) {
      commaStr = "," + commaStr;
    }
  }

  return commaStr;
}

module.exports = addCommas;
