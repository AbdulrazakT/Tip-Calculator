import "./App.css";
import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

function App() {
  return (
    <div className="App">
      <h2>Quick Tip</h2>
      <TopContainer />
      {/* Request: I want the total value to be passed from the Top Container to the Bottom Container
      and them to sync */}
      <BottomContainer total="100" />
    </div>
  );
}

export default App;
