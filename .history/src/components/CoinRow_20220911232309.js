import React from "react";

const CoinRow = ({ coin, index }) => {
  console.log(coin, index);
  return (
    <tr>
      <td>{index}</td>
      <td>{coin.name}</td>
      <td>{coin.current_price}</td>
      <td>{coin.current_price}</td>
    </tr>
  );
};

export default CoinRow;
