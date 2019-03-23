module.exports = function getZerosCount(number, base) {
  let originalNumber = number;
  let countBase = base;

  for (let i = 2; i <= base; i++) {

    if (countBase % i === 0) {
      let baseCount = 0;

      while (countBase % i === 0) {
        baseCount++;
        countBase = parseInt(countBase / i);
      }

      let currSum = 0;
      let currNumber = number;

      while (currNumber / i > 0) {
        currNumber = parseInt(currNumber / i);
        currSum += currNumber;
      }

      originalNumber = Math.min(originalNumber, currSum / baseCount);
    }

  }
  return parseInt(originalNumber);
}