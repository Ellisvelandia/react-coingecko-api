import {useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {

  useEffect(() => {
  axios.get("")
  }, [])


  return (
    <div className="App">
      <h1>Coin Market</h1>
    </div>
  );
}

export default App;
