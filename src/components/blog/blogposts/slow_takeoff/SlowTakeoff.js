import React from 'react';
import BlogPost from "../../BlogPost";

const SlowTakeoff = () => {

return ( 

<BlogPost
          title="The Slow Takeoff Scenario"
          date="October 5, 2025"
          content={[
            <p key="p1">
             There is a solid argument that superhuman AI could arrive more gradually than expected and actually be more than 25 years away. 
             Last year I wrote a post where I emphasized that AI progress could get out of hand quickly, since then I have gathered evidence 
             of the opposite. This standpoint comes from debunking common misconceptions held in the AI community and is supported by recent 
             empirical evidence.
            </p>,
            <p key="p2">
              First of all, why is it important to think about possible AI timelines? No matter how or when it arrives, no doubt superhuman 
              AI will have grand impacts on the economy. So timing those impacts is crucial for making effective career decisions. Entering 
              a field that could become irrelevant in the next decade or investing in an idea that will pay fruit only after 40 years could 
              become costly. Eliminating this uncertainty would make for better decisionmaking all around.
            </p>,
            <p key="p3">
             Scaling up the current technology is having diminishing returns. We can’t expect progress only by scaling up the existing LLMs,
              this was most pronounced by GPT-5 being only an incremental improvement on GPT-4. The LLMs do have a ceiling and some of the 
              initial limitations persist through the models. It is impressive in its wide knowledgebase but doesn't have novel insights, 
              multimodality, long term agency, and situational awareness - all the things we expect from a human. To unlock these 
              capabilities a completely new approach is needed.

            </p>,
            <p key="p4">
             Most jobs are actually harder than people from the outside perceive. Therefore the automation of human jobs could be much 
             slower than anticipated. We often like to frame a job by the one central task but in reality almost all jobs encompass far 
             more than a singular task. For example the general public might think of an accountant as someone who just inserts numbers 
             into excel and does some simple arithmetic calculations - a task an AI could easily do now. But in fact the job consists of 
             so much more subtleties like reading the emotions of people, interpreting the true meaning and intentions behind a coworkers' 
             words, catching conceptual errors, interpreting meaning and consequences of the numbers and voicing these in the appropriate 
             manner to the managers. The combination of these soft skills is absolutely necessary for an accountant and is currently far 
             out of AI’s reach. 
            </p>,

            <p key="p5">
            A human perception of ability often makes AI appear more impressive than it is. For humans writing a great essay or solving a 
            complex math problem is strongly correlated with other advanced abilities and as well as all the basic human abilities. So 
            when we see a strong intellectual performance in one domain we instinctively assume many other abilities from that person but 
            this is not relevant for AI. For an AI excellent performance in one domain is not correlated with more basic human capabilities. 
            Therefore this common human fallacy makes AI seem much more capable than it actually is. 
            </p>,
            
            <p key="p6">
            As an example, AI mathematical abilities are very deceiving. Sure it can do short undergraduate level problems well but it 
            absolutely can not come up with novel ideas or do math research. I would describe LLMs math skills as a fifth grader who can 
            remember every single formula and theorem. It does not have great fundamental logic skills, it just knows every formula. This 
            approach is surprisingly useful for solving short homework type problems and again can deceive us into thinking it has broader 
            mathematical abilities. 
            </p>,
            
            <p key="p7">
            Why the described ‘intelligence explosion’ wouldn’t necessarily have huge consequences as often portrayed? A boost in intelligence
             alone wouldn’t amount to much. It is necessary to build structure around the increased intelligence to effectively cultivate it. 
             Plugging greater intelligence into the current system would be woefully inefficient. Humans have had the same amount of brainpower 
             for hundreds of thousands of years and yet only in the last hundreds of years we started making significant progress on how to 
             cultivate it more effectively. You had to develop culture, language, writing and a school system to name a few.
            </p>,

            <p key="p8">
            The same goes for the industrial revolution, it wasn't just the case of great increase in horsepower, many things had to come 
            together at once. If you had given every farm a steam engine not much would have changed. For the industrial revolution to bear 
            fruit you had to move people from farms to cities, build factories, improve transportation, make laws, and develop financial 
            systems. Even if you look at the AI we have now it is forced on top of technologies that were not designed for it, making it 
            much less effective.
            </p>,
            
            <p key="p9">
            When considering these nuances, when would be the expected arrival of superhuman intelligence?  It is difficult to assign any date to 
            it with any considerable confidence. I would say that based on the information we have the lower bound is much further than 2035 as 
            stated in my previous post. I would venture to guess 2050 at the earliest.
            </p>,

            <p key="p10">
            Saying all of this I still feel like it is inevitable that superintelligence will be a reality at some point in the future. I don't
            think that it will be smooth linear or exponential progress from now on, nor do I believe in the intelligence explosion where at a 
            certain point the agent goes into perfect recursive self development. But I don't think there are any fundamental limiting factors 
            to arrive at superhuman intelligence - if we can simulate a human brain we can simulate a super human brain. 
            </p>,
              ]}
        />
            )
        }

export default SlowTakeoff;