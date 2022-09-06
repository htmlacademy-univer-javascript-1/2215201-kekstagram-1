const getRndIntInRange = (leftNumber, rightNumber) =>
{
  if (leftNumber < 0) {leftNumber = 0;}
  if (rightNumber < 0) {rightNumber = 0;}
  if (leftNumber < rightNumber) {[leftNumber, rightNumber] = [rightNumber, leftNumber];}
  return Math.floor(Math.random() * (rightNumber + 1 - leftNumber) + leftNumber);
};

const isStrSizeAcceptable = (string, maxSize) => string.length <= maxSize;
