import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Strong = styled.span`
  color: red;
`;

const App = () => (
  <h1>
    My <Strong>React</Strong> and TypeScript App!
  </h1>
);

ReactDOM.render(<App />, document.getElementById('root'));
