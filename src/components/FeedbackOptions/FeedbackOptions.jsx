import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback.good}>
        good
      </button>
      <button type="button" onClick={onLeaveFeedback.neutral}>
        neutral
      </button>
      <button type="button" onClick={onLeaveFeedback.bad}>
        bad
      </button>
    </div>
  );
}

export { FeedbackOptions };
