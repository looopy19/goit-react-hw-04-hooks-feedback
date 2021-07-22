import { useState } from "react";

import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleFeedbackOptions = (e) => {
        const feedback = e.currentTarget.dataset.feedback;

        switch (feedback) {
            case 'good':
                setGood((prevState) => prevState + 1)
                break;
        
            case 'neutral':
                setNeutral((prevState) => prevState + 1)
                break;
        
            case 'bad':
                setBad((prevState) => prevState + 1)
                break;
        
            default:
                return;
        }
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();

        return Math.round((good * 100) / total);
    }

        const totalFeedback = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <Container>
                        <FeedbackOptions
                            options={{ good, neutral, bad}}
                            onLeaveFeedback={handleFeedbackOptions}
                        />
                    </Container>
                </Section>

                <Section title="Statistics">
                    <Container>
                        {totalFeedback > 0 ? (
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={totalFeedback}
                                positivePercentage={positivePercentage}
                            />
                        ) : (
                            <Notification message="No feedback given"></Notification>
                        )}
                    </Container>
                </Section>
            </>
        );
    
}

    export default App;