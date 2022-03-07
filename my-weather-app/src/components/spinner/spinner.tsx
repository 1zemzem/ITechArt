import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
    <div className="lds-css" data-testID="111">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;