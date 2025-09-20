import React, { useEffect, useState } from "react";

/**
 * PercentageChange component
 *
 * Props:
 * - buyPrice: number (the price you bought at)
 * - ticker: string (the stock symbol)
 * - fetchPrice: async function(symbol) => number (returns the latest price)
 * - intervalMs: polling interval (default 5s)
 *
 * Returns only the percentage text, colored:
 *  - green if > 0
 *  - red if < 0
 *  - white if === 0
 */

// Replace the demo fetcher with a real API call
async function realFetchPrice(symbol) {
  const API_KEY = "82f1135e39fa4c26b16ebdcdbf99a936";
  const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data?.values && data.values.length > 0) {
      return parseFloat(data.values[0].close); // latest close as a number
    } else {
      throw new Error("No data returned");
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}


function PercentageChange({ buyPrice, ticker, fetchPrice = realFetchPrice, intervalMs = 500000 }) {
  const [livePrice, setLivePrice] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let timer;

    const tick = async () => {
      try {
        const latest = await fetchPrice(ticker);
        if (!cancelled) setLivePrice(Number(latest));
      } catch (err) {
        console.error(`Failed to fetch price for ${ticker}:`, err);
      }
    };

    tick();
    timer = setInterval(tick, intervalMs);

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [ticker, fetchPrice, intervalMs]);

  if (buyPrice == null || buyPrice === 0 || livePrice == null) return <span style={{ color: "#9ca3af" }}>…</span>;

  const pct = ((livePrice - buyPrice) / buyPrice) * 100;
  let color = "#ffffff"; // default white
  if (pct > 0) color = "#22c55e"; // green
  else if (pct < 0) color = "#ef4444"; // red

  return (
    <span style={{ color, marginTop: 'auto', marginBottom: 'auto', marginLeft: '30px', fontSize: '30px' }}>
      {pct.toFixed(2)}%
    </span>
  );
}

export default PercentageChange;
