import { useState } from "react";
import styled from "styled-components";

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { SectionTittle } from "./SectionTittle/SectionTittle";

const Container = styled.div`
  width: 400px;
  text-align: center;
  margin: auto;
`


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const getFeedback = (event) => { 
    switch (event) {
      case 'good':
        setGood(good => good + 1) 
        break;
      case 'neutral':
      setNeutral(neutral => neutral + 1)
        break;
      case 'bad':
        setBad( bad => bad + 1)
        break;
      default:
        return;
    }
    
  }

  const countTotalFeedback = () => {
    return (good + neutral + bad)
  }

  const countPositivePercentage = () => {
    return `${Math.round(good/(good + neutral + bad) * 100)}%`
  }
  
  return (
<Container>
  <SectionTittle tittle="Please Leave feedback">
   <FeedbackOptions options={['good', 'neutral', 'bad']} getFeedback={getFeedback}/>   
  </SectionTittle>   
     
  <SectionTittle tittle="Statistic">
{countTotalFeedback() > 0 
? 
   <Statistics
good={good}
neutral={neutral}
bad={bad}
total= {countTotalFeedback()}
positivePercentage={countPositivePercentage()} />
: 
   <Notification notification="There is no feedback" /> }

  </SectionTittle>


</Container>
  );
};
