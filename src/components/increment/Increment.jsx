import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increment } from "../../context/slice/CounterSlice";

const Increment = () => {
  let dispatch = useDispatch();
  const [inc, setInc] = useState("");

  let incValue = inc === "" ? 1 : +inc;

  return (
    <div>
      <div className="increment__btn">
        <input
          value={inc}
          onChange={(e) => setInc(e.target.value)}
          type="number"
        />
        <button onClick={() => dispatch(increment(incValue))}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Increment;
