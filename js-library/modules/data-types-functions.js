
export const isUndefined = (obj) => {
  return typeof obj === "undefined";
};

export const objIsNumber = (obj) => {
  return typeof obj === "number";
};

export const objIsString = (obj) => {
  return typeof obj === "string";
};

export const objIsObject = (obj) => {
  return typeof obj === "object";
};

export const objIsNull = (obj) => {
  return obj === null;
};

export const objIsFunction = (obj) => {
  return typeof obj === "function";
};

export const objIsNaN = (obj) => {
  return isNaN(obj);
};

export const objIsBoolean = (obj) => {
  return obj === true || obj === false;
};
