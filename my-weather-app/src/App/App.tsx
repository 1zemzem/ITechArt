import React from "react";
import "./App.scss";
import Main from "../components/main";
import ErrorBoundry from "../components/error-boundry/error-boundry";

const App = () => {
  return (
    <div className="app">
      <ErrorBoundry>
        <Main />
      </ErrorBoundry>
    </div>
  );
};

export default App;
