import React from 'react'

const CoinRow = ({coin, index}) => {
  console.log(coin, index)
  return (
    <tr>
    <td>{coin.name}</td>
  </tr>
  )
}

export default CoinRow