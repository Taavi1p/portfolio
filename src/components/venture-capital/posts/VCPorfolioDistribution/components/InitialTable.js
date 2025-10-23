import React from "react";
import "./InitialTable.css";

/**
 * Outcome ROI Table (CSS version)
 * - Plain React + external CSS file (OutcomeRoiTable.css)
 */

const defaultRows = [
  { label: "Loss", freq: 0.5, ret: 0 },
  { label: "Save", freq: 0.25, ret: 0.5 },
  { label: "Small Win", freq: 0.18, ret: 3 },
  { label: "Large Win", freq: 0.05, ret: 15 },
  { label: "Unicorn", freq: 0.02, ret: 50 },
];

function pct(n) {
  return `${(n * 100).toFixed(0)}%`;
}

export default function OutcomeRoiTable({ rows = defaultRows }) {
  const computed = rows.map((r) => ({ ...r, roi: r.freq * r.ret }));
  const totalRoi = computed.reduce((s, r) => s + r.roi, 0);
  const totalFreq = computed.reduce((s, r) => s + r.freq, 0);

  return (
    <div className="roi-container">
      <div className="roi-card">
        <div className="roi-header">Outcome Type vs ROI</div>
        <div className="roi-table-wrap">
          <table className="roi-table">
            <thead>
              <tr>
                <th>Outcome Type</th>
                <th>Freq</th>
                <th>Return</th>
                <th>Theoretical ROI</th>
              </tr>
            </thead>
            <tbody>
              {computed.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "alt-row" : undefined}>
                  <td>{r.label}</td>
                  <td>{pct(r.freq)}</td>
                  <td>{r.ret}</td>
                  <td>{r.roi.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="bold">total</td>
                <td className="bold">{pct(totalFreq)}</td>
                <td></td>
                <td>
                  <span className="total-badge">{totalRoi.toFixed(2)}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
