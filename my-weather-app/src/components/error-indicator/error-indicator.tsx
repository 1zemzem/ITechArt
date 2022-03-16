import React from "react";

import "./error-indicator.scss";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator" data-testid="error-indicator">
      <span className="boom">Sorry, can't found your city</span>
    </div>
  );
};

export default ErrorIndicator;
