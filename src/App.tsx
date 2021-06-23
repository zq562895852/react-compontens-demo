import React from 'react';
import "./style/index.scss"
import MenuDemo from './examples/MenuDemo';

import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import IconDemo from './examples/IconDemo';
import ButtonDemo from './examples/ButtonDemo';
import InputDemo from './examples/InputDemo';
library.add(fas);
function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>

      <MenuDemo />
      <IconDemo />
      <ButtonDemo />
      <InputDemo />
    </div>
  );
}

export default App;
