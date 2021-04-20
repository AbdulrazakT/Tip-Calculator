import "./BottomContainer.css";

const BottomContainer = ({ props }) => {
  return (
    <div className="container">
      <div className="align">
        <label>Split:</label>
        <p>{props.splitValue} Person</p>
      </div>

      <input type="range" min="1" max="10" onChange={props.splitHandler} />

      <div className="align">
        <label>Bill Each:</label>
        <p>${props.billEach}</p>
      </div>

      <div className="align">
        <label>Tip Each:</label>
        <p>${props.tipEach}</p>
      </div>
    </div>
  );
};

export default BottomContainer;
