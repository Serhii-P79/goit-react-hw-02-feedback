import React from 'react';
import { Css } from './Section.styled';

function Section({ title, children }) {
  return (
    <Css.Section>
      <h2>{title}</h2>
      {children}
    </Css.Section>
  );
}

export { Section };
