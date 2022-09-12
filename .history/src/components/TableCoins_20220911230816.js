import React from "react";

const TableCoins = ({ coins }) => {
  return (
    <table className="table table-dark mt-4  ">
      <thead>
        <tr>
          <td>name</td>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr>{coin.name}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
