import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../context/slice/CounterSlice";

const Reset = () => {
  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Reset;
