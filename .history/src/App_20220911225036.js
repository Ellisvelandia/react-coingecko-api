import {useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {

  useEffect(() => {
  await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
  }, [])


  return (
    <div className="App">
      <h1>Coin Market</h1>
    </div>
  );
}

export default App;
