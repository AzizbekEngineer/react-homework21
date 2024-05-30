import React from "react";
import Increment from "./components/increment/Increment";
import Result from "./components/result/Result";
import Decrement from "./components/decrement/Decrement";
import Reset from "./components/reset/Reset";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="app__box">
        <h1 className="app__title">Counter App</h1>
        <div className="counter__btns">
          <Increment />
          <Result />
          <Decrement />
        </div>
        <div className="reset__btn">
          <Reset />
        </div>
      </div>
    </div>
  );
};

export default App;
