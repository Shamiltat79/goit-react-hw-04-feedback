import { useState } from "react";


import { Statistics } from "./Statistics/Statistics";


export const App = () => {

  const [good, setGood] = useState(5);
  const [neutral, setNeutral] = useState(15);
  const [bad, setBad] = useState(25);
  

  const countTotalFeedback = () => {
    return (good + neutral + bad)
  }

  const countPositivePercentage = () => {
    return `${Math.round(good/(good + neutral + bad) * 100)}%`
  }
  
  return (
    <>
   
<Statistics
good={good}
neutral={neutral}
bad={bad}
total= {countTotalFeedback()}
positivePercentage={countPositivePercentage()} />

</>
  );
};
