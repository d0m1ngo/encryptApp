import React from "react";
import PageSwitcher from "../../pages/PageSwitcher";
import "./App.css";

const App = () => {
  return (
    <div className="app grid">
      <React.Fragment>
        <PageSwitcher />
      </React.Fragment>
    </div>
  );
};

export default App;
