import "./App.css";
import Map from "./Components/Map";
import Searchbox from "./Components/Searchbox";

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignContent: "center", height: "100vh" }}
    >
      <Searchbox />
    </div>
  );
}

export default App;
