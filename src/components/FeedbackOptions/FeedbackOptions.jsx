import React from 'react';
import { Css } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Css.ButtonOption>
      {options.map(element => {
        return (
          <Css.Button
            key={element}
            type="button"
            name={element}
            onClick={onLeaveFeedback}
          >
            {element}
          </Css.Button>
        );
      })}
    </Css.ButtonOption>
  );
}

export { FeedbackOptions };
