import React from 'react';
import BlogPost from "../../../blog/BlogPost.js";

const Tallink = () => {
  return (
    <BlogPost
      title="Investment Memo: Tallink Grupp"
      date="April 24, 2026"
      content={[
        <p>
          <b>Investment Thesis</b>
        </p>,
        <p>
          Tallink is a great example of a misunderstood covid recovery story. 
          Despite an excellent handling of the pandemic era shock and the 
          subsequent restructuring the stock is still well below pre-pandemic 
          levels. I believe the market is pricing the stock on the smaller 
          overall revenue and fleet and not acknowledging the higher EBITDA 
          margin and lowering of the debt. This creates an opportunity to 
          buy at a steep discount.
        </p>,

        <p>
          <b>Key Drivers</b>
        </p>,
        <p>
          First, the company has deleveraged aggressively, reducing debt from 
          a pandemic high of 853m to 445m in 2025, which is notably below the 
          pre-COVID level of 578m (EUR). While paying down this debt, the 
          company made a strategic shift toward a more modern brand by 
          selling older vessels and operating only the newest premium ships. 
          Through these actions, they have significantly grown EBITDA margins.
        </p>,
        <p>
          Lastly, due to Russian sanctions, they experienced a decrease in 
          cargo shipments. However, they have found a path that is less 
          reliant on Russian cargo; while this hurts in the short term, 
          it is a great development for the long term.
        </p>,

        <p>
          <b>Variant Perception</b>
        </p>,
        <p>
          The street thinks that Tallink came out of the covid era badly hurt 
          by having to reduce their fleet and that they are the same as before 
          just smaller in size. While I think they did as well as they could've 
          and actually surprised us with a meaningful pivot showing promise 
          for the future and great long term thinking.
        </p>,

        <p>
          <b>Catalysts</b>
        </p>,
        <ul>
          <li><b>2026 Earnings Report:</b> If 2026 confirms high margins are sustainable, it will break the downward trend of the last two years.</li>
          <li><b>Return to Expansion:</b> Recommencing ship acquisitions will signal a return to former size with improved efficiency.</li>
          <li><b>Sanction Easing:</b> Any easing of Russian sanctions would provide a beneficial boost to the business.</li>
        </ul>,

        <p>
          <b>Risks</b>
        </p>,
        <ul>
          <li><b>Fuel costs:</b> Rising fuel costs resulting from conflict in the Middle East.</li>
          <li><b>Strategic delay:</b> Taking too long to begin expanding again, leading to a permanent loss of market share.</li>
        </ul>,

        <p>
          <b>Valuation & Upside</b>
        </p>,
        <p>
          Since revenue is currently at 0.9x of pre-COVID levels, I believe 
          the stock price should be at least 0.9x pre-COVID levels, and 
          potentially higher because the EBITDA margin has improved and 
          the debt is now lower.
        </p>,

        <p>
          <b>Conclusion</b>
        </p>,
        <p>
          Tallink is a cleaner, more focused, and financially stronger 
          business than it was pre-COVID. This disconnect presents an 
          asymmetric opportunity.
        </p>,
        <p>
          <b>Recommendation: BUY</b>
        </p>
      ]}
    />
  );
};

export default Tallink;