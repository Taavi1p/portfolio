import React from 'react';
import BlogPost from "../../../blog/BlogPost.js";

const InvestmentMemo = () => {
  return (
    <BlogPost
      title="Investment Memo: Userjourneys.ai"
      date="October 21, 2025"
      content={[
        <p key="p0">
          <b>1. Executive Summary</b>
        </p>,
        <p key="p1">
            Userjourneys.ai is a web analytics tool that uses AI to look through session replays to
            automatically find and label faulty user experiences. They also provide a complementary
            feature of automatically outputting tickets to other platforms like Jira, Linear, and Slack.
            The company is very early stage, launched just 5 months ago (June 2025) and recently
            raised pre-seed. What makes the company exciting is the technically adept fresh-out-ofcollege founding team.
        </p>,

        <p key="p2">
          <b>2. Problem & Solution</b>
        </p>,
        <p key="p3">
            User experience or UX means how a customer feels when using a product. Good UX
            makes the use of a product smooth and enjoyable. There are teams within companies
            that focus on optimizing for just that. To improve the UX teams need to collect and analyze data about how users interact with the product, that’s what we call UX analytics.
            In this case we will look at the UX of websites and mobile apps.
        </p>,

         <p key="p3">
            The main question of UX analytics is ”Why are users dropping off?”. The current tools
            can give you insight into what is happening but not always why its happening.
        </p>,

        <p key="p3">
            Business analytics consultant Eric Sandosham, Ph.D. writes in 2023 about the state of
            UX analytics: <i>”User Experience (UX) has been a major consideration in the digitalisation
            journey of many organisations. But despite its importance, not enough has been discussed
            about better ways to measure its effects. UX designers are still highly reliant on ‘5-star’
            or ‘thumbs up / thumbs down’ ratings or net promoter scores (NPS) to gauge whether
            users are delighted with their digital solutions. Survey-based responses have been steadily
            plummeting across the decades, and now stands at below 10% (i.e. less than 10% of users
            will take part in a survey).”</i>
        </p>,

        <p key="p3">
            Session replays are a reconstructed video of the user interacting with the website. Session
            replays are a great tool to give you information about what actually happened. The issue is that manually looking through the videos doesn’t scale. Doing it manually is very
            time consuming and most of the watch minutes won’t be relevant to the UX issue at hand.
        </p>,

        <p key="p3">
            The solution UserJourneys offers is an AI-powered system that automatically reviews
            session replays to detect and label problematic user interactions, saving a lot of time.
            Additionally the program is conveniently integrated with other platforms and automatically outputs tickets based on the session replays for the front-end team to solve.
        </p>,

        <p key="p4">
          <b>3. Market Opportunity</b>
        </p>,
        <p key="p5">
            The market is relatively small but showing significant growth. The broader product analytics market was valued at 14.81 B in 2023, it was expected to have a compound annual
            growth value of 19.8%. Thus it could potentially grow to around 52 billion by 2030.
        </p>,

        <p key="p5">
            TThis space is quite fragmented, there is no clear dominance at the moment. The three
            market leaders are:
        </p>,

        <ul key="ul1">
          <li>Google analytics</li>
          <li>WebTrends Inc</li>
          <li>Adobe Systems</li>
        </ul>,

        <p key="p5">
            More specifically the session replay software market had a valuation of 417 M in 2024.
            The valuation is expected to reach $888.9 M by 2030, growing at a CAGR of 13.4%.
        </p>,

        <p key="p5">
            There is also plenty competition from other startups in this space:
        </p>,

        <ul key="ul2">
          <li>OpenReplay (France, Seed)</li>
          <li>GlassBox (Israel, acquired)</li>       
          <li>LogRocket (US, Series C)</li>       
          <li>UXCam (US, Seed)</li>       
        </ul>,

        <p key="p5">
            All these startups were founded years before and were initially based on much simpler
            technology than Userjourneys’. As expected, at this point they all recognize the shift in
            the market and are all switching to AI powered solutions to handle data intensive tasks.
        </p>,

        <p key="p6">
          <b>4. Product & Technology</b>
        </p>,
        <p key="p7">
            The core product of UserJourneys is an AI-powered UX analytics tool that connects to
            existing popular session replay platforms like PostHog and Sentry. From the input session replays the program detects the user interaction friction points and ranks the issues
            based on severity. Each issue is then converted to a ticket with the replay context added.
            All this is done with the goal of automating UX analytics.
        </p>,

         <p key="p7">
            Since there is no access to the exact inner working of the UserJourneys’ system, I’ve constructed a model of how the system most likely works based on clues available. Including
            information from the demos and descriptions on the website.
        </p>,

         <p key="p7">
            The first step in the workings of the UserJourneys’ app is data ingestion. The program
            gets all the relevant user data from either Sentry or PostHog. The input data includes all
            kinds of user behavior events like: clicks, navigation paths, replay metadata, code errors,
            front-end crashes.
        </p>,

         <p key="p7">
            The next part is the user journey reconstruction. Based on the input data the program
            builds a model of how the user journey actually looked like in chronological order. It
            does its best to clear all the noise from the raw data and leave the meaningful events and
            actions.
        </p>,

        <p key="p7">
            The third step is the core of the program, the machine learning (ML) based user friction
            issue detecting engine. The engine most likely uses a hybrid ML approach where various detection methods are used. Firstly, there is a hard coded heuristic program that
            detects pre-determined common friction events like: rage clicking, hesitation, etc. Then
            there is a ML classifier layer that detects more subtle and rare friction events that aren’t
            considered in the heuristic detection. This ML algorithm learns from large amounts of
            labeled session replays. In parallel there are working sequencing models that are trained
            to detect frictions that result from sequences of events rather than a single error. There
            could even be some anomaly detection, a session is flagged if it deviates too much from
            common user interaction even if no specific friction point is detected. Finally there is a
            LLM reasoning layer that describes the friction points in a comprehensible manner
        </p>,

        <p key="p7">
            As the secondary feature, they have impact modeling and ranking of the errors. Each
            issue is ranked on the basis of stats like: affected user count, impact on conversion, severity (do the user get slightly affected or completely stuck).
        </p>,

        <p key="p7">
           The last step is the ticket generation. The ticket of the issue to be fixed includes the
            session replay with timestamps to crucial moments. It also gives reproduction steps for
            the user to test out the error for themselves. The LLM tries to find the root cause of
            the problem and write a description for external tools like Jira. They even provide a
            functionality that the program sends the friction issue description straight to Claude
            code which writes a pull request for the possible fix.
        </p>,

        <p key="p8">
          <b>5. Business Model</b>
        </p>,

        <p key="p9">
            The pricing model is quite simplistic, consisting of a three tier subscription based system:
        </p>,

        <ul key="ul1">
          <li>Free plan</li>
          <li>Pro plan ($500 per month)</li>
          <li>Enterprise (custom pricing)</li>
        </ul>,

        <p key="p9">
          <b>6. Team</b>
        </p>,
        
        <p key="p10">
          <strong>founder, CEO:</strong> Lauri Kesküll, BSc Computer Science, Delft University <br />
          <strong>founder:</strong> Henri Suurorg, BSc Computer Science, KTH <br />
          <strong>founder:</strong> Vincent Pikand, BSc Computer Science, Delft University 
        </p>,

        <p key="p9">
            The team is still small, the three founding members plus a few hires. The founding team
            is quite homogeneous which implies good chemistry but limited range of skills and experiences. All of the founding members have a technical background but no significant
            prior startup experience
        </p>,

        <p key="p9">
            The teams technical background is tailored well for this project. They all studied computer science at a time where ML’s and LLM’s were already prevalent. For example
            Lauri’s bachelors thesis focused on ”pre-trained LLMs and research in extending their
            context length”. All of them also had notable internships that focused on developing just
            that type of technology. Thus in theory they should have great comfortability with this
            type technology.
        </p>,

        <p key="p9">
            They certainly have no lack of the entrepreneurial drive. Prior to this they have been involved in two similar projects with the same team. Firstly, Expand, which was a program
            that detects seizures from brain activity. For which they received $40k in equity-free funding. Secondly, Rivenor, which made ”custom AI tools for your business”. While these
            projects did not succeed it shows their ability to quickly pivot if the product isn’t getting
            traction. Furthermore it shows grit to stick to founding companies and not get discouraged even if the first projects don’t take off.

        </p>,

        <p key="p9">
            The team’s non-technical abilities are harder to gauge. After hearing them give a presentation I would say that Lauri has good public speaking skills. Based on their Linkedin
            activity they have good networking skills as well. By now they are quite well known in
            the Estonian startup scene but they don’t seem to have any direct links to high leverage
            startup figures as far as I could find
        </p>,


        <p key="p11">
          <b>7. Risks and Mitigations</b>
        </p>,
    
        <p key="p9">
            The main risks to their business are regulatory and from the fierce competition.
        </p>,

        <p key="p9">
            As mentioned above the competition risks are quite severe in this case. There are many
            established big players with deep pockets already on the broader web analytics market.
            Companies like Google or Adobe could in theory quickly develop this functionality inhouse and leverage their large customer base to gain users quickly. In addition to the
            major players there are a load of successful and more agile startups in this space. Most
            importantly UserJourneys doesn’t seem to have a clear edge over the competition or any
            valuable IP. There is nothing unique about the tech or the business plan.
        </p>,

        <p key="p9">
            The second is the regulatory risk. In this industry many concerns have been raised about the privacy issue. The whole program is based on monitoring every step of a users journey
            on the website and companies could easily be banned from collecting that type of sensitive data. This type of regulatory change would certainly mean the end of the company.
        </p>,

        <p key="p12">
          <b>8. Exit Opportunities</b>
        </p>,
        <p key="p13">
            A buyout seems the most likely outcome. Either from a major player or even PostHog
            or Sentry themselves. Getting acquired by Sentry or PostHog seems convenient as UserJourneys is already integrated to their services.
        </p>,

        <p key="p13">
            There have been many recent examples of startups getting acquired by more senior players
            in this space. Here is a table of recent acquisitions in the UX/Product analytics space:
        </p>,

        <p key="p13">
            Many companies in this space have gone public in the recent years:
        </p>,

        <p key="p13">
            From this we can conclude that the maximum reasonable exit valuation would be in the
            single digit billions and the most likely valuation would be well below that. The buyout
            price being around 10x ARR for the lower valued startups and 20x ARR for the high end
            companies.
        </p>,

        <p key="p13">
            GlassBox is a great example of a startup in UX analytics space going thru the whole
            funding cycle, validating all types of exit scenarios. Glassbox, founded in 2010, raised up
            to a series C and then went public. In the IPO GlassBox raised 100M at 500M valuation.
            They later got again acquired and taken private by Alicorn Venture Partners.
        </p>,

        <p key="p14">
          <b>9. Recommendation</b>
        </p>,
        <p key="p15">
         Good potential upside but risky. . .
        </p>,
        <p key="p15">
            The potential upside of the company is high based on the technically gifted and entrepreneurial team. The tailwinds also seem to be in their favor as the whole market is
            undergoing a shift towards ML approaches.
        </p>,
        <p key="p15">
            Yet it is far from a slam dunk because of the risks involved. Mainly they are entering an
            already very crowded market with competitors also looking to make a switch towards the
            same technology. Secondly the founding team doesn’t seem to have a deeper connection
            to the core problem their solving. This would lead me to believe that they will most
            likely pivot and start a new company when this alley proves less fruitful than expected.
        </p>,
        <p key="p15">
            <b>Conclusion:</b> I would not invest, competition too great and team will likely pivot to new project.
        </p>,

      ]}
    />
  );
};

export default InvestmentMemo;
