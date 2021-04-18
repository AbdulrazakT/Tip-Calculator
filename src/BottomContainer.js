import "./BottomContainer.css";
import { useState } from "react";

function BottomContainer(props) {
  const [splitValue, setSplitValue] = useState(1);
  const [billEach, setBillEach] = useState(0);
  const [tipEach, setTipEach] = useState(0);
  const { total } = props;

  function splitHandler(event) {
    setSplitValue(event.target.value);
    setBillEach((total / splitValue).toFixed(2));
    setTipEach((billEach / 2).toFixed(2));

    console.log(total);
    console.log(splitValue);
  }

  return (
    <div className="container">
      <div className="align">
        <label>Split:</label>
        <p>{splitValue} Person</p>
      </div>

      <input type="range" min="1" max="10" onChange={splitHandler} />

      <div className="align">
        <label>Bill Each:</label>
        <p>${billEach}</p>
      </div>

      <div className="align">
        <label>Tip Each:</label>
        <p>${tipEach}</p>
      </div>
    </div>
  );
}

export default BottomContainer;
