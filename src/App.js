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
      <header className="App-header">
        <img src={house1} alt="house 1" />
        <img src={house2} alt="house 2" />
        <img src={house3} alt="house 3" />
        <img src={house4} alt="house 4" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
