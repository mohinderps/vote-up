import "./App.css";
import house1 from "./images/desktop/house-1.jpeg";
import house2 from "./images/desktop/house-2.jpeg";
import house3 from "./images/desktop/house-3.jpeg";
import house4 from "./images/desktop/house-4.jpeg";

console.log(house1);
console.log(house2);
console.log(house3);
console.log(house4);

function App() {
  return (
    <div className="App">
      {/* <img src={house1} alt="house 1" className="house-image" />
      <img src={house2} alt="house 2" className="house-image"/>
      <img src={house3} alt="house 3" className="house-image"/>
      <img src={house4} alt="house 4" className="house-image"/> */}
      <div className="item-a item">a</div>
      <div className="item-b item">b</div>
      <div className="item-c item">c</div>
      <div className="item-d item">d</div>
    </div>
  );
}

export default App;
