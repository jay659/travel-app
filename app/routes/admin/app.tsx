import React from 'react';
import btnc from '@syncfusion/ej2-react-buttons';

const { ButtonComponent } = btnc;


const App= () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Syncfusion Button Example</h1>
      <ButtonComponent >Click Me</ButtonComponent>
    </div>
  );
};

export default App;
