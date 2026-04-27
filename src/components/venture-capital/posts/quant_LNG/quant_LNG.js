import React from "react";
import BlogPost from "../../../blog/BlogPost.js";

const codeBlock = {
  backgroundColor: "#000",
  color: "#ffffffff",
  padding: "18px",
  borderRadius: "10px",
  overflowX: "auto",
  fontSize: "14px",
  lineHeight: "1.6",
  fontFamily: "monospace",
  margin: "20px 0",
  border: "1px solid #222",
  whiteSpace: "pre-wrap",
};

const whiteLink = {
  color: "#fff",
  textDecoration: "underline",
};

const QuantLNG = () => {
  return (
    <BlogPost
      title="Natural gas quant model"
      date="March 2026"
      content={[

        <p><b>Objective</b></p>,
        <p>
          The objective is to backtest a quantitative trading model that trades
          Henry Hub Natural Gas futures based on the weather forecast corrections
          in the US. The intuition is that a colder forecast revision would lead
          to a rise in the gas price and vice versa. Instead of change in pure
          temperature in Celsius, economically more meaningful measure, called
          Heating Degree Days (HDD) was used, which simply takes into account
          that there is no heating demand when temperature is above 18 degrees
          Celsius.
        </p>,

        <p><b>Collecting The Data</b></p>,
        <p>
          For backtesting it is necessary to obtain historical data for the
          weather forecasts (not the actual weather) and the Henry Hub gas
          prices. Let's first look at the gas price.
        </p>,

        <p>
          The Gas price data can easily be obtained from many sources on the
          internet, in this case the data was taken from the Business Insider
          database:
          <br />
          <a
            href="https://markets.businessinsider.com/commodities/natural-gas-price"
            target="_blank"
            rel="noreferrer"
            style={whiteLink}
          >
            https://markets.businessinsider.com/commodities/natural-gas-price
          </a>
        </p>,

        <p>
          There is no limitation on the date range so a sample range from jan
          2020 to jan 2026 was chosen. The raw data was in the following format:
        </p>,

        <pre style={codeBlock}>
{`Natural Gas (Henry Hub).csv

Open,Close,High,Low,Volume,Date
3.879,4.416,4.425,3.818,,01/30/26
0,3.878,3.93,0,,01/29/26`}
        </pre>,

        <p>
          To clean the data the unnecessary columns were removed and the date
          was transformed into the correct formatting:
        </p>,

        <pre style={codeBlock}>
{`gas_price_daily_clean.csv

date,close
2020-01-02,2.13`}
        </pre>,

        <p>
          The next important step for this test is to calculate and add the
          column for return compared to the previous day:
        </p>,

        <pre style={codeBlock}>
{`gas_price_with_returns.csv

date,close,return
2020-01-03,2.114,-0.007511737089201831
2020-01-06,2.149,0.01655629139072845`}
        </pre>,

        <p>
          The gas price data is now formatted exactly how its needed and the
          next task is to find reliable historical weather forecast data. This
          is much more heavy dataset because for each day a seven day forecast
          is needed. Weather data is less straight forward to obtain than
          commodity prices but there are some options with different price
          points available. For simplicity and budget sake the open source data
          platform open-meteo was used. This had some limitations as the data
          goes back until only 2022 March. This limits the sample size
          significantly but it was used regardless as it is the best free
          option.
        </p>,

        <p>
          Secondly, it is now important to pick the region of origin for the
          weather data. Again, for simplicity sake one city was picked. It was a
          reasonable choice to go with Chicago, Illinois a northern inland city
          whose temperature forecast changes can most likely affect the Henry
          Hub price.
        </p>,

        <p>
          Again the raw data was formatted accordingly and the HHD revision
          column was added:
        </p>,

        <pre style={codeBlock}>
{`chicago_revision_lead6_vs7.csv

signal_date,target_date,revision,temp6,temp7
2021-03-23,2021-03-29,1.7416666666666654,11.558333333333332,9.816666666666666
2021-03-24,2021-03-30,-0.6458333333333339,13.125,13.770833333333334`}
        </pre>,

        <p>
          Then it was necessary to merge the gas price and weather datasets.
          This was done using a python script, aligning the return price with
          the previous day's revision to look for next-day returns.
        </p>,

        <p><b>Results</b></p>,

        <p>
          Then calculating the correlation between the return and the HDD
          revision:
        </p>,

        <pre style={codeBlock}>
{`Total observations: 1188
Full sample correlation: 0.005013356400767768`}
        </pre>,

        <p>
          And then also separating the data into thirds based on the size of the
          revision and calculating the mean next day return for each.
        </p>,

        <pre style={codeBlock}>
{`Full sample bucket means:

bucket
Low     0.001166
Mid     0.001859
High    0.001850`}
        </pre>,

        <p>
          The results indicate no strong correlation between the HDD revision
          magnitude and next day gas price returns. The next logical step is to
          find the results for the winter months only, when the heating demand
          is highest and the correlations should be the clearest.
        </p>,

        <p><b>Winter Results</b></p>,

        <pre style={codeBlock}>
{`Winter observations: 445
Winter correlation: -0.0031116794335663074

Winter bucket means:

bucket
Low     0.001214
Mid    -0.001409
High   -0.004068`}
        </pre>,

        <p>
          These results still gave no meaningful correlation. In fact these
          results indicate the opposite, that the returns were lower when there
          was a colder revision. But the results are all close to zero so it
          would not be meaningful to make any conclusion based on them.
        </p>,

        <p><b>Possible Improvements</b></p>,

        <p>
          The good news is that this was only the initial simplest possible
          backtest and there are vast possibilities to improve on it.
        </p>,

        <p>Possible improvements include:</p>,

        <ul>
          <li>Find further reaching weather forecast data</li>
          <li>
            Aggregate HDD across multiple leads (sum of day 1–7 HDD and revise
            that total)
          </li>
          <li>Use multiple cities (Midwest + Northeast)</li>
          <li>Focus on extreme revisions only (top/bottom decile)</li>
          <li>Examine same-day returns instead of next-day</li>
        </ul>,
      ]}
    />
  );
};

export default QuantLNG;