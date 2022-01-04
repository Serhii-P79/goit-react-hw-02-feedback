import React, { Component } from 'react';
import { Statistics, FeedbackOptions, Section, Notification } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={true}
            onLeaveFeedback={{
              good: this.goodIncrement,
              neutral: this.neutralIncrement,
              bad: this.badIncrement,
            }}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export { App };
