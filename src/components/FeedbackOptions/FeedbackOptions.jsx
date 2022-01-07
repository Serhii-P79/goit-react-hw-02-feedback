import { Css } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
