import "./TopContainer.css";
import React, { useState } from "react";

//WITH HOOKS
function TopContainer(props) {
  //state declaration
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);

  function billHandler(event) {
    setBill(event.target.value);
  }

  function tipHandler(event) {
    //Update percent value
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
  }

  return (
    <div className="containerTop">
      <div className="align">
        <label>Bill:</label>
        <input type="number" placeholder="Your Bill" onChange={billHandler} />
      </div>

      <div className="align">
        <label>Select Tip:</label>
        <p>{percent}</p>
      </div>

      <input type="range" min="0" max="100" onChange={tipHandler} />

      <div className="align">
        <label>Tip:</label>
        <p>${tip}</p>
      </div>

      <hr />

      <div className="align">
        <label>Total:</label>
        <p>${total}</p>
      </div>
    </div>
  );
}

export default TopContainer;

//WITHOUT HOOKS ()
// class TopContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { bill: 0, tip: 0, total: 0 };
//   }

//   billHandler = (event) => {
//     this.setState({ bill: event.target.value });
//   };

//   tipHandler = (event) => {
//     this.setState({ tip: event.target.value });
//     if (this.state.bill <= 0) {
//       alert("Enter Bill Amount!");
//     } else {
//       let totalBill = eval(
//         this.state.tip * 0.01 * this.state.bill + Number(this.state.bill)
//       );
//       this.setState({ total: totalBill.toFixed(2) });
//     }

//     console.log("tip", event.target.value);
//     console.log("bill", this.state.bill);
//   };

//   render() {
//     //Destructuring properties
//     const { tip, total } = this.state;
//     return (
//       <div className="containerTop">
//         <div className="align">
//           <label>Bill:</label>
//           <input
//             type="number"
//             placeholder="Your Bill"
//             onChange={this.billHandler}
//           />
//         </div>

//         <div className="align">
//           <label>Select Tip:</label>
//           <p>{tip}</p>
//         </div>

//         <input type="range" min="1" max="100" onChange={this.tipHandler} />

//         <div className="align">
//           <label>Tip:</label>
//           <p>${tip}</p>
//         </div>

//         <hr />

//         <div className="align">
//           <label>Total:</label>
//           <p>${total}</p>
//         </div>
//       </div>
//     );
//   }
// }
