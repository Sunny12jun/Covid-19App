import React from 'react';
import './Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, confirmed, recovered, critical, deaths }) => (
        <tr>
          {/* <th>country</th> <th>confirmed</th> */}
          <td>{country}</td>
          <td>
            <strong>{confirmed}</strong>
          </td>

          {/* <td>
          <strong>{recovered}</strong>
        </td>
        <td>
          <strong>{critical}</strong>
        </td>
        <td>
          <strong>{deaths}</strong>
        </td> */}

        </tr>
      ))}
    </div>
  )
}

export default Table
