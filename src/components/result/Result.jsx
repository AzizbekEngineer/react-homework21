import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  let result = useSelector((state) => state.counter.value);
  return (
    <div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Result;
