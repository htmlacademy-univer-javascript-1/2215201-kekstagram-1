function getRndIntInRange(leftNumber, rightNumber)
{
  if (leftNumber < 0) {leftNumber = 0;}
  return leftNumber <= rightNumber ? Math.floor(Math.random() * (rightNumber + 1) + leftNumber) : 0;
}

function isStrSizeAcceptable(string, maxSize)
{
  return string.length <= maxSize;
}
