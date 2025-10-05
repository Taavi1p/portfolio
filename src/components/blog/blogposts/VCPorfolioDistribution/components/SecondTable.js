import React from "react";
import "./InitialTable.css"; // reuse the same style (dark-mode ready)

/**
 * SecondTable
 * - Matches the style of OutcomeRoiTable (same CSS classes)
 * - Adds portfolio context: # companies, # Outcomes, Actual Fund ROI
 */

const defaultRows = [
  { label: "Loss", freq: 0.5, ret: 0, outcomes: 7, fundRoi: 0 },
  { label: "Save", freq: 0.25, ret: 0.5, outcomes: 3, fundRoi: 0.1 },
  { label: "Small Win", freq: 0.18, ret: 3, outcomes: 2, fundRoi: 0.4 },
  { label: "Large Win", freq: 0.05, ret: 15, outcomes: 0, fundRoi: 0 },
  { label: "Unicorn", freq: 0.02, ret: 50, outcomes: 0, fundRoi: 0 },
];

function pct(n) {
  return `${(n * 100).toFixed(0)}%`;
}

export default function SecondTable({ companies = 15, rows = defaultRows }) {
  const computed = rows.map((r) => ({ ...r, theoRoi: r.freq * r.ret }));
  const totalTheo = computed.reduce((s, r) => s + r.theoRoi, 0);
  const totalFreq = computed.reduce((s, r) => s + r.freq, 0);
  const totalFundRoi = computed.reduce((s, r) => s + (r.fundRoi || 0), 0);

  return (
    <div className="roi-container">
      <div className="roi-card">
        <div className="roi-header">Fund Outcomes Summary</div>

        {/* Meta strip */}
        <div className="roi-table-wrap">
          <table className="roi-table">
            <thead>
              <tr>
                <th># companies</th>
                <th colSpan={5}>{companies}</th>
              </tr>
              <tr>
                <th>Outcome Type</th>
                <th>Freq</th>
                <th>Return</th>
                <th>Theoretical ROI</th>
                <th># Outcomes</th>
                <th>Actual Fund ROI</th>
              </tr>
            </thead>
            <tbody>
              {computed.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "alt-row" : undefined}>
                  <td>{r.label}</td>
                  <td>{pct(r.freq)}</td>
                  <td>{r.ret}</td>
                  <td>{r.theoRoi.toFixed(2)}</td>
                  <td>{r.outcomes}</td>
                  <td>{(r.fundRoi ?? 0).toFixed(1)}</td>
                </tr>
              ))}
              <tr>
                <td className="bold">total</td>
                <td className="bold">{pct(totalFreq)}</td>
                <td></td>
                <td>{totalTheo.toFixed(2)}</td>
                <td></td>
                <td>
                  <span className="total-badge">{totalFundRoi.toFixed(1)}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
