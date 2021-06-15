import React from 'react';
// import './App.css';
import "./style/index.scss"
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition'
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'

import Input from './components/Input/Input'
function App() {
  const position = useMousePosition()
  return (
    <div className="App" style={{ padding: '20px' }}>
      {/* <Button btnType={ButtonType.Default} >hello</Button>
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Danger}>hello</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' target="_blank">hello</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>hello</Button> */}
      <Input suffix={<Button>按钮</Button>} append='.com' type='number' size='lg' className='my-input' >
      </Input>
      {/* <Menu defaultIndex="0" mode='horizontal' opened>
        <MenuItem >0000</MenuItem>
        <MenuItem >11111</MenuItem>
        <SubMenu title="dropDown" >
          <MenuItem > dropDown-11111</MenuItem>
          <MenuItem > dropDown-11111</MenuItem>
        </SubMenu>
        <MenuItem >2222</MenuItem>
        <MenuItem >3333</MenuItem>
      </Menu> */}
    </div>
  );
}

export default App;
