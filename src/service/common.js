import siteConfig from "../config/site.config";

export const getWei = (value) => {
  return Math.pow(10, siteConfig.NETWORK.DECIMAL) * value
}

export const range = (start, end, step = 1) => {
  let result = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}