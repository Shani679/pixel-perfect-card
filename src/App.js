import React from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';


const View = styled.div`
  padding: 10px;
  @media(max-width: 768px){
    display: flex;
    justify-content: center;
  }
`
function App() {
  return (
    <View>
      <Card/>
    </View>
  );
}

export default App;
