import React from "react";
import "./table.css";

export default function AcquisitionsTable() {
  return (
    <div className="acq-container">
      <div className="acq-card">
        <div className="acq-header">Analytics M&A (2019–2022)</div>

        <div className="acq-table-wrap">
          <table className="acq-table" role="table">
            <thead>
              <tr>
                <th>Company Acquired</th>
                <th>Acquirer</th>
                <th>Year</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CoolaData</td>
                <td>Medallia</td>
                <td>2019</td>
                <td>$7.6M</td>
              </tr>
              <tr>
                <td>SessionCam</td>
                <td>Glassbox</td>
                <td>2020</td>
                <td>$20–40M</td>
              </tr>
              <tr>
                <td>Decibel</td>
                <td>Medallia</td>
                <td>2021</td>
                <td>$160M</td>
              </tr>
              <tr>
                <td>Hotjar</td>
                <td>Contentsquare</td>
                <td>2021</td>
                <td>Undisclosed</td>
              </tr>
              <tr>
                <td>UserTesting</td>
                <td>Thoma Bravo</td>
                <td>2022</td>
                <td>$1.3B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="acq-footnote">
          Sources: company announcements and public reports.
        </div>
      </div>
    </div>
  );
}
