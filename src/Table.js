import React from 'react';
import './Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, confirmed, recovered, critical, deaths }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{confirmed}</strong>
          </td>
        </tr>
      ))}
    </div>
  )
}

export default Table
