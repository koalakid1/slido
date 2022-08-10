import React from 'react';
import styled from 'styled-components';
import Body from './component/body';
import Header from './component/header';
import Global from './global';

const App = () => {
  return (
    <div>
      <Global/>
      <Header></Header>
      <Body></Body>
      <Sample></Sample>
    </div>
  );
};

export default App;

const Sample = styled.div`
  height: 100000rem;
`