import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../context/slice/CounterSlice";

const Decrement = () => {
  let dispatch = useDispatch();
  const [dec, setDec] = useState("");
  const countValue = useSelector((state) => state.counter.value);
  let resValue = dec === "" ? 1 : +dec;
  useEffect(() => {
    localStorage.setItem("countValue", countValue);
  }, [countValue]);
  return (
    <div>
      <div className="decrement__card">
        <input
          value={dec}
          onChange={(e) => setDec(e.target.value)}
          type="number"
        />
        <button
          disabled={dec > countValue || countValue <= 0}
          onClick={() => dispatch(decrement(resValue))}
          className="decrement"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Decrement;
