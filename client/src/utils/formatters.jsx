export const formatString = (text, length) => {
  if (text == null) {
    return "";
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  let last = text.lastIndexOf(" ");
  text = text.substring(0, last);
  return text + "...";
};
export const numberWithCommas = (x) => {
  if (!isNaN(x) && x % 1 !== 0) {
    return x;
  } else if (!isNaN(x)) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  } else {
    return false;
  }
};
export const calcPorcentage = (original, offer) => {
  return (((original - offer) * 100) / original).toFixed(0);
};
