import "./App.css";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";
import { useState } from "react";

const App = () => {
  //Top container states
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);

  //bottom container states
  const [splitValue, setSplitValue] = useState(1);
  const [billEach, setBillEach] = useState(0);
  const [tipEach, setTipEach] = useState(0);

  //Handlers for top container
  const handleBillChange = (event) => {
    setBill(event.target.value);
  };

  const handleTipChange = (event) => {
    setPercent(event.target.value);

    //update tip value
    let temp = (Number(event.target.value) * 0.01 * Number(bill)).toFixed(2);
    setTip(temp);

    //update total value
    if (bill <= 0) {
      alert("Bill amount must be greater than Zero");
    } else {
      let temp_total = Number(tip) + Number(bill);
      setTotal(temp_total.toFixed(2));
    }
  };

  //handler for bottom container
  const handleSplitChange = (event) => {
    setSplitValue(event.target.value);
    setBillEach((total / splitValue).toFixed(2));
    setTipEach((billEach / 2).toFixed(2));

    console.log("Total Value", total);
    console.log("Split Value", splitValue);
    console.log("BillEach Value", billEach);
    console.log("TipEach Value", tipEach);
  };

  //Passing state variables and functions as props
  const top_container_states = {
    billHandler: handleBillChange,
    tipHandler: handleTipChange,
    tip: tip,
    percent: percent,
    total: total,
  };

  const bottom_container_states = {
    total: total,
    splitValue: splitValue,
    billEach: billEach,
    tipEach: tipEach,
    splitHandler: handleSplitChange,
  };
  return (
    <div className="App">
      <h2>Quick Tip</h2>
      <TopContainer props={top_container_states} />
      <BottomContainer props={bottom_container_states} />
    </div>
  );
};

export default App;
