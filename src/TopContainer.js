import "./TopContainer.css";

const TopContainer = ({ props }) => {
  return (
    <div className="containerTop">
      <div className="align">
        <label>Bill:</label>
        <input
          type="number"
          placeholder="Your Bill"
          onChange={props.billHandler}
        />
      </div>

      <div className="align">
        <label>Select Tip:</label>
        <p>{props.percent}</p>
      </div>

      <input type="range" min="0" max="100" onChange={props.tipHandler} />

      <div className="align">
        <label>Tip:</label>
        <p>${props.tip}</p>
      </div>

      <hr />

      <div className="align">
        <label>Total:</label>
        <p>${props.total}</p>
      </div>
    </div>
  );
};

export default TopContainer;
