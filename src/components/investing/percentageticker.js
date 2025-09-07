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
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=JX0NNNXXI2WTOT19`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch price for ${symbol}`);
  }
  const data = await response.json();

  
  // Log the raw API response
  console.log("Raw API data:", data);

  // Get the "Time Series (Daily)" object
  const timeSeries = data["Time Series (Daily)"];
  if (!timeSeries) throw new Error("No time series data found");

  // Get the latest date (the first key)
  const latestDate = Object.keys(timeSeries)[0];
  const latestClose = timeSeries[latestDate]["4. close"];
  return Number(latestClose);
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
