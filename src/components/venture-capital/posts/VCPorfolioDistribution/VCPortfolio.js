import React from 'react';
import BlogPost from "../../../blog/BlogPost.js";
import InitialTable from './components/InitialTable.js';
import SecondTable from './components/SecondTable.js';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import graph from './assets/graph_50.png';
import graph2 from './assets/graph_500.png';

const VCPortfolio = () => {

return ( 

<BlogPost
          title="VC firm’s portfolio distribution"
          date="October 5, 2025"
          content={[
            <p key="p1">
              In response to Dave McClure’s <i>“99 VC Problems But A Batch Ain’t One: Why Portfolio Size Matters For Returns”</i>
            </p>,
            <p key="p2">
              It is a well known blog post from a venture capitalist Dave McClure written in 2015. In the article he argues that
              most VC portfolio sizes are too small and you need at least a 100-200 size early stage portfolio to capture unicorns.
            </p>,
            <p key="p3">
              I would love to point out the flaw in this and why it might not be as well reasoned as it seems. Let's start by clarifying his main argument:
            </p>,
            <p key="p4">
             <i>“Most VC funds are far too concentrated in a small number (20–40) of companies. The industry would be better served
              by doubling or tripling the average # of investments in a portfolio, particularly for early-stage investors where 
              startup attrition is even greater. If unicorns happen only 1–2% of the time, it logically follows that portfolio 
              size should include a minimum of 50–100+ companies in order to have a reasonable shot at capturing these elusive 
              and mythical creatures.”</i>
            </p>,
            <p key="p5">
              To support this argument he assigns these probabilities to each return range. It is unclear where this data originates 
              from since it is not cited but lets assume for sake of argument that this is a good approximation. Thus the portfolio 
              distribution is as follows:
            </p>,
            <InitialTable />,
            <p key="p6">
                He makes the point that if the portfolio size is too small you get a fractional number of companies in a cell and you 
                have to round down since you can't have a fraction of a company. This way you lose proportionally more value in the 
                large win and unicorn category.  Especially great value is lost if you get less than a company of unicorns. The loss 
                of value is visualised by this example of 15 company portfolio:
            </p>,
            <SecondTable />,
            <p key="p7">
             Here with the same distribution you get only a 0.5 return on investment.
             </p>,
            <p key="p8">
                My response:
            </p>,
            <p key="p9">
                I would argue this argument is simplified to the point of being incorrect. It assumes that you pick investments randomly. 
                In actualty with each pick you will have diminishing return. If you are an effective VC your picks on average are better 
                than random. Since the pool of startups isn't infinite the likelihood of picking a unicorn decreases which each pick. 
                Let's try to add that parameter to the portfolio distribution.  
            </p>,
            <p key="p10">
                To start the calculations lets make assumptions that you are a VC firm that invests in tech startups in the US (the most 
                common type). We get the following values:
            </p>,
            <><ul key="ul1">
                <li>Number of new unicorns (2023 -2024): <b>88</b></li>
                <li>average time to become unicorn: <b>6 years</b> (pitchbook.com)</li>
                <li>Startups that raised seed rounds (2017-2018): <b>3100</b> (pitchbook.com)</li>
                <li>Success rate of seed to unicorn: 88/3100 = <b>2.8%</b></li>
            </ul></>,
            <p key="p11">
                So let’s calculate the accurate probability of picking a unicorn averaged over the first N picks. Lets say that reasonably
                 the accuracy of your firm picking an unicorn is three times greater than picking at random. So we can say that your firm's 
                 edge is 3. 
              </p>,
              <p key="p12">
                The probability of picking an unicorn at pick t is given by the formula:
                </p>,
                 <BlockMath math="p_t = \frac{r U_t}{r U_t + B_t}" />,
                <p key="p13">
                where r is the edge of the firm, U_t is the number of unicorns left in the pool and B_t is the number of non-unicorns 
                left in the pool.
                </p>,
                <p key="p14">
                    Let's also add competition. Every time you make a pick three other firms make a pick a startup and eliminate them from 
                    the investment pool. This is a conservative estimate. The edge of the other firms will also be set at three.
                </p>,
                <p key="p15">
                    Thus for a portfolio of size 50:
                </p>,
                 <img src={graph} alt="Graph 50" style={{ width: "80%", height: "auto", borderRadius: "10px", display: "block", margin: "auto" }} />,
                <p key="p16">
                    The average probability of picking a unicorn over first 50 picks is <b>6.059%</b>.
                </p>,
                <p key="p17">
                    On the graph the per-pick and cumulative probability of picking an unicorn is visualized. Cumulative probability 
                    with no competition is added for comparison, it represents the situation where only the startups you pick are eliminated. 
                    The percentages increase initially because the first picks are unlikely to be unicorns but then all the probabilities 
                    start to decrease.
                </p>,
                <p key="p18">
                    for a portfolio size of 500:
                </p>,
                 <img src={graph2} alt="Graph 500" style={{ width: "80%", height: "auto", borderRadius: "10px", display: "block", margin: "auto" }}/>,
                <p key="p19">
                The average probability of picking a unicorn over first 500 picks is <b>3.828%</b>.<br />
                Here it is clear that the average probability decreases significantly when you increase the number of startups picked. 
                So it behooves the VC to keep the portfolio size small, contrary to the initial implication of Dave McClure.
                </p>

              ]}
        />
            )
        }

export default VCPortfolio;