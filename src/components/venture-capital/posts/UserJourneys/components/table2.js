import React from "react";
import "./table.css"; // reuse same stylesheet

export default function IpoTable() {
  return (
    <div className="acq-container">
      <div className="acq-card">
        <div className="acq-header">Analytics & CX IPOs</div>

        <div className="acq-table-wrap">
          <table className="acq-table" role="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>IPO Year</th>
                <th>IPO Valuation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dynatrace</td>
                <td>2019</td>
                <td>$7.8B</td>
              </tr>
              <tr>
                <td>Qualtrics</td>
                <td>2021</td>
                <td>$15B</td>
              </tr>
              <tr>
                <td>WalkMe</td>
                <td>2021</td>
                <td>$2.6B</td>
              </tr>
              <tr>
                <td>Sprinklr</td>
                <td>2021</td>
                <td>$4B</td>
              </tr>
              <tr>
                <td>Glassbox</td>
                <td>2021</td>
                <td>$500M</td>
              </tr>
              <tr>
                <td>Amplitude</td>
                <td>2021</td>
                <td>$7.1B</td>
              </tr>
              <tr>
                <td>UserTesting</td>
                <td>2021</td>
                <td>$1.3B</td>
              </tr>
              <tr>
                <td>Braze</td>
                <td>2021</td>
                <td>$8.6B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="acq-footnote">
          Market valuations based on IPO filings and public sources.
        </div>
      </div>
    </div>
  );
}
