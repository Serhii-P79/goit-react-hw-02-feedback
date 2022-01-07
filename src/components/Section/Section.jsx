import { Css } from './Section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <Css.Section>
      <h2>{title}</h2>
      {children}
    </Css.Section>
  );
}

export { Section };

Section.protoType = {
  title: PropTypes.string.isRequired,
};
