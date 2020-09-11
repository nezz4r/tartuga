import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './theme/globalStyles';

import Form from './components/form';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
    </div>
  );
}

export default App;
