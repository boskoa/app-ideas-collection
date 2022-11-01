export const converter = (binNumStr) => {
  if (!binNumStr.length) {
    return null;
  }

  let decNum = 0;
  const l = binNumStr.length;
  for (let i = l - 1; i >= 0; i--) {
    decNum += binNumStr[i] * Math.pow(2, l - 1 - i);
  }
  return decNum;
};

export const validator = (binNumStr) => {
  if (binNumStr.match(/[^01]/gi)) {
    return "You can enter only zeros and ones";
  }

  if (binNumStr.length > 8) {
    return "You can not enter more than 8 digits";
  }

  return "";
};
