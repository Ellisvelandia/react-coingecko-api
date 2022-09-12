import React from "react";
import CoinRow from "./CoinRow";

const TableCoins = ({ coins }) => {
  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {coins.map(coin => (
        <CoinRow coin={coin} key={index}  index={index}/>
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
