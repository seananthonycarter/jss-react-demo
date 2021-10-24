import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const TestComponent2 = (props) => (
  <div>
    <p>TestComponent2 Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default TestComponent2;
