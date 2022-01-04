const dataTypes = {
  objIsDefined: (obj) => {
    if (typeof obj !== "undefined") {
      return true;
    } else {
      return false;
    }
  },

  objIsNumber: (obj) => {
    if (typeof obj === "number") {
      return true;
    } else {
      return false;
    }
  },

  objIsString: (obj) => {
    if (typeof obj === "string") {
      return true;
    } else {
      return false;
    }
  },

  objIsObject: (obj) => {
    if (typeof obj === "object") {
      return true;
    } else {
      return false;
    }
  },

  objIsNull: (obj) => {
    if (!obj) {
      return true;
    } else {
      return false;
    }
  },

  objIsFunction: (obj) => {
    if (typeof obj === "function") {
      return true;
    } else {
      return false;
    }
  },

  objIsNotNumber: (obj) => {
    if (obj >= 0) {
      return false;
    }
    if (obj <= 0) {
      return false;
    }
    return true;
  },

  objIsBoolean: (obj) => {
    if (obj === true || obj === false) {
       return true;
    } else {
        return false;
    }
  }
};

export const objIsDefined = dataTypes.objIsDefined;
export const objIsNumber = dataTypes.objIsNumber;
export const objIsString = dataTypes.objIsString;
export const objIsObject = dataTypes.objIsObject;
export const objIsNull = dataTypes.objIsNull;
export const objIsFunction = dataTypes.objIsFunction;
export const objIsNotNumber = dataTypes.objIsNotNumber;
export const objIsBoolean = dataTypes.objIsBoolean;